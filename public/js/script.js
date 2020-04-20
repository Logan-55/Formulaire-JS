function checkNameInput()
{
    // Déclaration des variables
    var validName = ""
        , styleInput = event.target.style
    ;
    
    // Si aucun caractère n'est saisi, on indique l'erreur
    if (nameFunction.value === ""){
        validName = "Entrez votre nom de société";
        event.target.style.border = "1px solid red";
    }
    else 
    {
        styleInput.border =  "";
    }

    document.getElementById("aideCompanyName").textContent = validName;
};

function checkCorrespondantInput()
{
    // Déclaration des variables
    var validCorrespondant = ""
        , styleInput = event.target.style
    ;
    
    // Si aucun caractère n'est saisi, on indique l'erreur
    if (correspondantFunction.value === ""){
        validCorrespondant = "Entrez le nom de la personne à contacter";
        event.target.style.border = "1px solid red";
    }
    else 
    {
        styleInput.border =  "";
    }

    document.getElementById("aideCompanyCorrespondant").textContent = validCorrespondant;
};

function checkCityInput()
{
    // Déclaration des variables
    var validInput = ""
        , styleInput = event.target.style
    ;
    
    // Si aucun caractère n'est saisi, on indique l'erreur
    if (cityFunction.value === ""){
        validInput = "Entrez la ville où se situe votre société";
        event.target.style.border = "1px solid red";
    }
    else 
    {
        styleInput.border =  "";
    }

    document.getElementById("aideCompanyCity").textContent = validInput;
};

function checkMailInput()
{
    // Déclaration des variables
    var checkMail = /@/
        , validiteMail = ""
        , styleInput = event.target.style
    ;
    
    // Si l'adresse ne contient pas '@', envoi d'une erreur
    if (!checkMail.test(event.target.value))
    {
        validiteMail = "Adresse mail invalide";
        event.target.style.border = "1px solid red";
    }
    else 
    {
        styleInput.border =  "";
    }
    document.getElementById("aideCompanyMail").textContent = validiteMail;

};

function checkCPInput()
{
    // Déclaration des variables
    var validiteCP = ""
        , styleInput = event.target.style
        , errorInput = "1px solid red"
    ;
    
    // Vérification de la longueur de chaîne
    if (event.target.value.length !== 5)
    {
        validiteCP = "Nombre de caractères insuffisant";
        styleInput.border =  errorInput;
        styleInput.fontColor = "red";
    }
    // Vérification des caractères 
    else if (isNaN(event.target.value))
    {
        validiteCP = "Veuillez saisir un Code Postal";
        styleInput.border =  errorInput; 
    }
    else
    {
        styleInput.border =  "";
    }
    document.getElementById("aideCompanyCP").textContent = validiteCP;
};

function choiceTech()
{
    var textList = document.getElementById("techEnvironmentList");
    
    console.log(event.target.value);
    if (textList.textContent === undefined)
    {
        textList.textContent = event.target.value;
    }
    else
    {
        textList.textContent = event.target.value;
    }
        
};

function checkForm(f)
{
    var name = f.elements['companyName'].value;
    var correspondant = f.elements['companyCorrespondant'].value;
    var address = f.elements['companyAddress'].value;
    var mail = f.elements['companyMail'].value;
    var CP = f.elements['companyCP'].value;
    var city = f.elements['companyCity'].value;
    var phone = f.elements['companyPhone'].value;
    var tech = f.elements['techEnvironmentList'].value;
    
    alert("Nom de la société : " + name + "\n"
        + "Personne à contacter : " + correspondant + "\n"
        + "Adresse de la société : " + address + "\n"
        + "Adresse mail : " + mail + "\n"
        + "Code Postal : " + CP + "\n"
        + "Ville : " + city + "\n"
        + "Téléphone : " + phone + "\n"
        + "Environnement technique : " + tech
    );
    
    return false;
};

var nameFunction = document.getElementById("companyName");
var correspondantFunction = document.getElementById("companyCorrespondant");
var mailFunction = document.getElementById("companyMail");
var CPFunction = document.getElementById("companyCP");
var cityFunction = document.getElementById("companyCity");
var techEnvironmentFunction = document.getElementById("techEnvironment");
var formContact = document.getElementById("formContact");

nameFunction.addEventListener("blur", function(event){checkNameInput(this);});
correspondantFunction.addEventListener("blur", function(event){checkCorrespondantInput(this);});
cityFunction.addEventListener("blur", function(event){checkCityInput(this);});
mailFunction.addEventListener("blur", function(event){checkMailInput(this);});
CPFunction.addEventListener("blur", function(event){checkCPInput(this);});
techEnvironmentFunction.addEventListener("change", function(event){choiceTech(this);});
formContact.addEventListener("submit", function(f){checkForm(this);});