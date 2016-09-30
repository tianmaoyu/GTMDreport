using System;
using System.IO;
using System.Windows.Forms;
using Microsoft.Office.Interop.Excel;
using System.Reflection;
using System.Runtime.InteropServices;

namespace ExcelTool
{
    public partial class Form1 : Form
    {
        private Microsoft.Office.Interop.Excel.Application excelApp;
        private string newPath;
        string dateString = "未知";

        [DllImport("User32.dll", CharSet = CharSet.Auto)]
        public static extern int GetWindowThreadProcessId(IntPtr hwnd, out int ID);
        public Form1()
        {
            InitializeComponent();
            excelApp = new Microsoft.Office.Interop.Excel.Application();
            excelApp.Visible = true;
            excelApp.DisplayAlerts = false;
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            OpenFileDialog fileDialog = new OpenFileDialog();
            fileDialog.Multiselect = true;
            fileDialog.Title = "请选择文件";
            fileDialog.Filter = "所有文件(*.xls)|*.xls";
            if (fileDialog.ShowDialog() == DialogResult.OK)
            {
                foreach(string file in fileDialog.FileNames)
                {
                    this.textBox1.Text += file.ToString() + "\r\n";
                }
                 
            }
           
            //路径
        }

        private void button2_Click(object sender, EventArgs e)
        {
            var files = this.textBox1.Text.Split('\r', '\n');
            foreach (string file in files)
            {
                if (file.Contains(".xls"))
                {

                    var excelPath = file;
                    //路径
                    var path = Directory.GetParent(excelPath);

                    //文件名称
                    var directioryNmae = Path.GetFileNameWithoutExtension(excelPath);

                    //新建目录
                    newPath = Path.Combine(path.ToString(), directioryNmae);
                    if (!Directory.Exists(newPath))
                    {
                        Directory.CreateDirectory(newPath);
                    }

                    //打开Eecel文件

                    Workbooks workbooks = excelApp.Workbooks;
                    Workbook workbook = workbooks.Add(excelPath);

                    //取得sheets
                    Sheets sheets = workbook.Sheets;
                    foreach (Worksheet sheet in sheets)
                    {
                        var sheetName = sheet.Name;
                        var sheetNameIndex = GetEnumIndex(sheetName);

                        //分为四类
                        if (sheetName.Contains("1"))
                        {
                            switch (sheetNameIndex)
                            {
                                case 0:
                                    break;
                                case 1:
                                    ReadAndWirteA2(sheet, Enum.GetName(typeof(NewSheetName), 1)); break;
                                default:
                                    ReadAndWirteA2(sheet, Enum.GetName(typeof(NewSheetName), 2)); break;
                            }
                        }
                        else
                        {
                            switch (sheetNameIndex)
                            {
                                case 0:
                                    break;
                                case 11:
                                    ReadAndWirteB1(sheet, Enum.GetName(typeof(NewSheetName), 3)); break;
                                default:
                                    ReadAndWirteB1(sheet, Enum.GetName(typeof(NewSheetName), 4)); break;
                            }
                        }

                    }
                    workbook.Close(false, Type.Missing, Type.Missing);
                }
            }

        }

        /// <summary>
        /// 全省民营工业主要指标-全省
        /// </summary>
        /// <param name="sheet"></param>
        private void ReadAndWirteA1(Worksheet sourceSheet)
        {
            //验证
            if (!GetValue(sourceSheet, 5, 2).Contains("民营经济"))
            {
                MessageBox.Show("数据格式不正确！"+sourceSheet.Name);
                return;
            }
            var dateString = GetValue(sourceSheet, 3, 1);
            var regionName = sourceSheet.Name;
            string name = newPath + "\\" + NewSheetName.民营工业主要指标地区.ToString() + ".xls";
            CreateFile(name);
            Workbook workbook = excelApp.Workbooks.Open(name);
            var targetSheet = (Worksheet)workbook.Sheets.get_Item(1);
            Range sourceRange= sourceSheet.Range[sourceSheet.Cells[7, 1], sourceSheet.Cells[23, 4]];
            Range targetRange = targetSheet.Range[targetSheet.Cells[7, 1], targetSheet.Cells[23, 4]];
            targetRange.Value = sourceRange.Value;

            //写日期
            Range colDate = targetSheet.Range[targetSheet.Cells[7, 5], targetSheet.Cells[23, 5]];
            colDate.Value = dateString;

            //名称
            Range colName = targetSheet.Range[targetSheet.Cells[7, 6], targetSheet.Cells[23, 6]];
            colName.Value = regionName;
            workbook.Save();
            workbook.Close(false, Type.Missing, Type.Missing);

            //string newName = newPath + "\\" + NewSheetName.全省民营工业主要指标全省.ToString()+ "regionName" + "dateString" + ".xls";
            //Rename(name, newName);
        }
        /// <summary>
        ///  民营工业主要指标-地区
        /// </summary>
        /// <param name="sheet"></param>
        private void ReadAndWirteA2(Worksheet sourceSheet,string fileName)
        {
            //验证
            if (!GetValue(sourceSheet, 5, 2).Contains("民营经济"))
            {
                MessageBox.Show("数据格式不正确！" + sourceSheet.Name);
                return;
            }
        
            dateString = GetValue(sourceSheet, 3, 1);
            var regionName = sourceSheet.Name;
            string name = newPath + "\\" + fileName + ".xls";
            CreateFile(name);
            Workbook workbook = excelApp.Workbooks.Open(name, Type.Missing, Type.Missing, Type.Missing, Type.Missing
                , Type.Missing, Type.Missing, Type.Missing, Type.Missing
                , Type.Missing, Type.Missing, Type.Missing, Type.Missing);

            var targetSheet = (Worksheet)workbook.Sheets.get_Item(1);
            int lastRow = GetLastRow(targetSheet);
            Range sourceRange = sourceSheet.Range[sourceSheet.Cells[7, 1], sourceSheet.Cells[23, 4]];

            Range targetRange = targetSheet.Range[targetSheet.Cells[lastRow, 1], targetSheet.Cells[lastRow+16, 4]];
            targetRange.Value = sourceRange.Value;

            //写日期
            Range colDate = targetSheet.Range[targetSheet.Cells[lastRow, 5], targetSheet.Cells[lastRow + 16, 5]];
            colDate.Value = dateString;

            //名称
            Range colName = targetSheet.Range[targetSheet.Cells[lastRow, 6], targetSheet.Cells[lastRow + 16, 6]];
            colName.Value = regionName;
            workbook.Save();
            workbook.Close(false, Type.Missing, Type.Missing);
        }
        /// <summary>
        ///  规上民营工业分行业指标-全省
        /// </summary>
        /// <param name="sheet"></param>
        private void ReadAndWirteB1(Worksheet sourceSheet,string fileName)
        {
            //验证
            if (!GetValue(sourceSheet, 4, 2).Contains("煤炭"))
            {
                MessageBox.Show("数据格式不正确！"+ sourceSheet.Name);
                return;
            }
            //var dateString = GetValue(sourceSheet, 3, 1);
            var regionName = sourceSheet.Name;
            string name = newPath + "\\" + fileName + ".xls";
            CreateFile(name);
            Workbook workbook = excelApp.Workbooks.Open(name, Type.Missing, Type.Missing, Type.Missing, Type.Missing
                , Type.Missing, Type.Missing, Type.Missing, Type.Missing
                , Type.Missing, Type.Missing, Type.Missing, Type.Missing);

            var targetSheet = (Worksheet)workbook.Sheets.get_Item(1);
            int lastRow = GetLastRow(targetSheet,2);
            Range sourceRange = sourceSheet.get_Range("A4", "T17");
            Range targetRange = targetSheet.get_Range(String.Format("A{0}", lastRow), String.Format("T{0}", lastRow + 13));
            targetRange.Value = sourceRange.Value;

            //写日期
            Range colDate = targetSheet.get_Range(String.Format("U{0}", lastRow), String.Format("U{0}", lastRow + 13));
            colDate.Value = dateString;

            //名称
            Range colName = targetSheet.get_Range(String.Format("V{0}", lastRow), String.Format("V{0}", lastRow + 13));
            colName.Value = regionName;
            workbook.Save();
            workbook.Close(false, Type.Missing, Type.Missing);
        }
        /// <summary>
        /// 规上民营工业分行业指标-地区
        /// </summary>
        /// <param name="sheet"></param>
        private void ReadAndWirteB2(Worksheet sourceSheet)
        {
            ////验证
            //if (!GetValue(sourceSheet, 5, 2).Contains("民营经济"))
            //{
            //    MessageBox.Show("全省民营工业主要指标,数据格式不正确！");
            //    return;
            //}
        }

        private void ColsedExcel()
        {
            //关闭
            IntPtr t = new IntPtr(excelApp.Hwnd);
            int k = 0;
            GetWindowThreadProcessId(t, out k);
            System.Diagnostics.Process p = System.Diagnostics.Process.GetProcessById(k);
            p.Kill();
        }

        private int GetEnumIndex(string sheetName)
        {
            var names = Enum.GetNames(typeof(SheetName));
            for (int i = 0; i < names.Length; i++)
            {
                if (sheetName.Contains(names[i]))
                {
                    return i + 1;
                }
            }
            return 0;
        }
        private int GetLastRow(Worksheet worksheet,int colNumber=1)
        {
            
            var lastRow = worksheet.Rows.Count;
            for(int i=1;i<lastRow;i++)
            {
               Range range= worksheet.Cells[i, colNumber];
                string value = Convert.ToString(range.Value2);
                try
                {
                    if (value.Trim() =="")
                    {
                        return i;
                    }
                }
                catch
                {
                    return i;
                }
                
            }
            return 1;
        }


        private void Rename(string oldName,string newName)
        {
            FileInfo fileInfo = new FileInfo(oldName);
            fileInfo.MoveTo(newName);
        }

        private void CreateFile(string path)
        {
            if (!File.Exists(path))
            {
                FileStream fs = new FileStream(path, FileMode.CreateNew,FileAccess.ReadWrite);
                fs.Close();
            }
        }


        /// <summary>
        /// 获得单元格的文本
        /// </summary>
        /// <param name="sheet"></param>
        /// <param name="row"></param>
        /// <param name="col"></param>
        /// <returns></returns>
        public string GetValue(_Worksheet sheet, int row, int col)
        {
            var cell = sheet.Cells[row, col];
            if (cell.MergeCells == true)
            {
                // 本单元格是 “合并单元格”
                if (cell.MergeArea.Row == row && cell.MergeArea.Column == col)
                {
                    // 当前单元格 就是 合并单元格的 左上角 内容.
                    return cell.Text;
                }
                else
                {
                    // 返回 合并单元格的 左上角 内容.
                    return sheet.Cells[cell.MergeArea.Row, cell.MergeArea.Column].Text;
                }
            }
            else
            {
                // 本单元格是 “普通单元格”
                return cell.Text;
            }
        }

        private void Form1_FormClosed(object sender, FormClosedEventArgs e)
        {
            ColsedExcel();
        }
    }

    //Sheet 名称
    public enum SheetName
    {
        全省民营工业主要指标 = 1,
        贵阳市 = 2,
        六盘水 = 3,
        遵义 = 4,
        安顺 = 5,
        毕节 = 6,
        铜仁 = 7,
        黔西南 = 8,
        黔东南 = 9,
        黔南 = 10,
        规上民营工业分行业指标 = 11,
    };
    public enum NewSheetName
    {
        全省民营工业主要指标全省 = 1,
        民营工业主要指标地区 = 2,
        规上民营工业分行业指标全省 = 3,
        规上民营工业分行业指标地区 = 4,
    };
}
