function myFunction() {
    window.open('https://www.geeksforgeeks.org',
        ' ', 'width=500, height=300');
}

function myFunction2() {
    window.open("https://www.geeksforgeeks.org", "_blank")
}
//https://developer.mozilla.org/en-US/docs/Web/API/Window/open
function openRequestedPopup() {
    windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", 'width=500, height=300');
}

function myFunction3() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();

    var name = "عبدالله علي السالم";
    var mobileNo = "0508532127";
    var subject = "رسالة خاصة";
    var message = "أحبك";
    var chatId = "7956856";
    var newLine = "%0A";
    var salute = "تحية طيبة 🌹 " + newLine;
    var apilToken = "1703156053:AAGC_Xb2sYmywq6Rq1ew3qM2Sp9buvM3VVI";
    var contents = salute + newLine;
    contents += "هناك شخص شاهد سيرتك الذاتية وأرسل لك رسالةً تفاصيلها أدانه 😊❤:" + newLine;
    contents += "______________________" + newLine + newLine + " تفاصيل المرسل والرسالة ‍💌:";
    contents += "الاسم ✍: " + name + newLine;
    contents += "الجوال 📱: " + mobileNo + newLine;
    contents += "الموضوع 🚀: " + subject + newLine;
    contents += "نص الرسالة 📧: " + newLine + message + newLine;
    contents += "وقت الإرسال 📆: " + d + newLine;

    //contents += "التواصل عبر واتسآب 🔗:\n "+ shareWithSocialMediaController.sendToCustomer(mobileNo)}\n\n\n";
    contents += "لقد تم إرسال هذه الرسالة بواسطة موقع سيرتك الذاتية 📄 " + newLine + " تطوير فريق فرسان البرمجة 🐴";

    var link = "https://api.telegram.org/bot" + apilToken + "/sendMessage?chat_id=" + chatId + "&text=" + contents.replace("<br>", "%0A");

    var wnd = window.open(link);
    wnd.close();
}

function createFile() {
    var ForReading = 1, ForWriting = 2, ForAppending = 8;
    var TristateUseDefault = -2, TristateTrue = -1, TristateFalse = 0;

    var fso = new ActiveXObject("Scripting.FileSystemObject");

    // Create the file, and obtain a file object for the file.
    var filename = "c:\\testfile.txt";
    fso.CreateTextFile(filename);
    var fileObj = fso.GetFile(filename);

    // Open a text stream for output.
    var ts = fileObj.OpenAsTextStream(ForWriting, TristateUseDefault);

    // Write to the text stream.
    ts.WriteLine("Hello World!");
    ts.WriteLine("The quick brown fox");
    ts.Close();

    // Open a text stream for input.
    ts = fileObj.OpenAsTextStream(ForReading, TristateUseDefault);

    // Read from the text stream and display the results.
    while (!ts.AtEndOfStream) {
        var textLine = ts.ReadLine();
        document.write(textLine + "<br />");
    }
    ts.Close();
}