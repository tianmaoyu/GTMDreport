using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LinqToExcel;
using System.Data;
using System.Reflection;
using System.Data.OleDb;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace GTMDReport2.Common
{
    public class ExcelHelper
    {
        //Excel数据转List<T>
        public static IList<T> ReadExcelToEntityList<T>(string filePath) where T : class, new()
        {
            //读取Excel数据到DataTable
            DataTable tb = ReadExcelToDataTable(filePath);

            IList<T> list = DataTableToList<T>(tb);
            return list;

        }

        //Excel数据转List<T>
        public  JArray ReadExcelToJson<T>(string filePath,out int total) where T : class, new()
        {
            DataTable tb = ReadExcelToDataTable(filePath);
            total = tb.Rows.Count;
            string json = JsonConvert.SerializeObject(tb);
            return JArray.Parse(json);

        }
        //Excel数据转DataTable 使用的oledb读取方式
        public static DataTable ReadExcelToDataTable(string filePath)
        {
            if (filePath == string.Empty) throw new ArgumentNullException("路径参数不能为空");
            string ConnectionString = "Provider=Microsoft.ACE.OLEDB.12.0; Persist Security Info=False;Data Source=" + filePath + "; Extended Properties='Excel 8.0;HDR=Yes;IMEX=1'";
           
            //默认读取的Sheet1,你也可以把它封装变量,动态读取你的Sheet工作表
            OleDbDataAdapter adapter = new OleDbDataAdapter("select * From[Sheet1$]", ConnectionString); 
            DataTable table = new DataTable("TempTable");
            adapter.Fill(table);
            return table;
        }


        public bool Validate<T>(DataTable tb) where T : class, new()
        {

            return false;
        }

        //DataTable转List<T>
        public static List<T> DataTableToList<T>(DataTable dt) where T : class, new()
        {

            if (dt == null) return null;

            List<T> list = new List<T>();

            //遍历DataTable中所有的数据行 
            foreach (DataRow dr in dt.Rows)
            {
                T t = new T();

                PropertyInfo[] propertys = t.GetType().GetProperties();

                foreach (PropertyInfo pro in propertys)
                {
                    //检查DataTable是否包含此列（列名==对象的属性名）  
                    for(int i=0; i<=propertys.Length; i++)
                    {
                        if (dt.Columns[i].ColumnName.Equals(pro.Name))
                        {
                            object value = dr[pro.Name];

                            value = Convert.ChangeType(value, pro.PropertyType);//强制转换类型

                            //如果非空，则赋给对象的属性  PropertyInfo
                            if (value != DBNull.Value)
                            {
                                pro.SetValue(t, value, null);
                            }
                        }
                    }
                   
                }
                //对象添加到泛型集合中 
                list.Add(t);
            }

            return list;

        }

        /// <summary>
        /// 获取Excel中第一个Sheet名称
        /// </summary>
        /// <param name="filepath"></param>
        /// <param name="numberSheetID"></param>
        /// <returns></returns>
        /// <example>
        /// string sheetName = GetFirstSheetNameFromExcelFileName(strFileUpLoadPath, 0);
        /// </example>
        //public static string GetFirstSheetNameFromExcelFileName(string filepath, int numberSheetID)
        //{
        //    if (!System.IO.File.Exists(filepath))
        //    {
        //        return "This file doesn't exist!";
        //    }
        //    if (numberSheetID <= 1) { numberSheetID = 1; }
        //    try
        //    {
        //        string strFirstSheetName = null;

        //        Microsoft.Office.Interop.Excel.Application obj = (Microsoft.Office.Interop.Excel.Application)
        //            Microsoft.VisualBasic.Interaction.CreateObject("Excel.Application", string.Empty);
        //        Microsoft.Office.Interop.Excel.Workbook objWB = obj.Workbooks.Open(filepath, Type.Missing, Type.Missing,
        //            Type.Missing, Type.Missing, Type.Missing, Type.Missing,
        //            Type.Missing, Type.Missing, Type.Missing, Type.Missing,
        //            Type.Missing, Type.Missing, Type.Missing, Type.Missing);

        //        strFirstSheetName = ((Microsoft.Office.Interop.Excel.Worksheet)objWB.Worksheets[1]).Name;

        //        objWB.Close(Type.Missing, Type.Missing, Type.Missing);
        //        objWB = null;
        //        obj.Quit();
        //        obj = null;
        //        return strFirstSheetName;
        //    }
        //    catch (Exception Err)
        //    {
        //        return Err.Message;
        //    }
        //}
    }
}
