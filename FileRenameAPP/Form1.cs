using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FileRenameAPP
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            FolderBrowserDialog dialog = new FolderBrowserDialog();
            dialog.Description = "请选择文件路径";

            if (dialog.ShowDialog() == DialogResult.OK)
            {
                string foldPath = dialog.SelectedPath;
                DirectoryInfo theFolder = new DirectoryInfo(foldPath);
                FileInfo[] dirInfo = theFolder.GetFiles();
                var cc = theFolder.GetDirectories();
                //遍历文件夹  
                foreach (var directory in cc)
                {
                    MessageBox.Show(directory.FullName);
                    ReName(directory.FullName, directory.ToString().Substring(0, 10));
                }
            }
        }
        private void ReName(string path,string name)
        {
            DirectoryInfo theFolder = new DirectoryInfo(path);
            FileInfo[] dirInfo = theFolder.GetFiles();
            foreach(var file in dirInfo)
            {
                string newName = path+"\\"+ name+ file.Name;
                file.MoveTo(newName);
            }
        }
    }
}
