using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SharpScript.csharp
{
    public class Class1
    {
        public static void Test()
        {
            Dictionary<string, int> dictionary = new Dictionary<string, int>(10);
            string str = "WORLD";
            str.EndsWith("", StringComparison.CurrentCulture);
            dictionary.Clear();
            dictionary.Add("One", 1);
            Guid guid = new Guid();
        }
    }
}