// initMono(['../.net/MonoSanityClient.dll'], function () {
//     var a = 12;
//     var b = 13;
//     var result = invokeMonoMethod('MonoSanityClient', 'MonoSanityClient', 'Examples', 'AddNumbers', [a, b]);
//   });

SystemJS.import('loader/csharploader').then(function (module) {
    var cSharpLoader = module.JSharp.CSharpLoader;

    var assemblies = cSharpLoader.instance.loadAssemblies(['./MonoClient.dll'], () =>
    {
        // The assembly is loaded and runtime as well (example taken from blazor)
        var assembly = assemblies[0];
        var myClass = assembly.getType("MonoClient.Client")
        var addNumbersMethod = myClass.getMethod("AddNumbers");
        var a = 12;
        var b = 13;
        var result = addNumbersMethod.invoke([a,b]);

        var htmlElement = document.getElementById("myCSharpMethod");
        htmlElement.innerHTML = "C# Result: " + result;
    });
});