
class CommonMethods  {

    //doc = document HTML
    //element = element containing the text
    //textForQuery = search text
    GetCodeFromHTML(doc, element, textForQuery){
        const docArr = [...doc.querySelectorAll(element)];
        const textCode = docArr.map(el => el.innerHTML).filter(txt => txt.includes(textForQuery));
        const code = textCode.toString().split(/\D+/).join("");
        return code;
    };

}   

export default new CommonMethods;