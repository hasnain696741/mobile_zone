let object = {
    mobiles: {
        samsung: {
            samsunga10: {
                Camera: '12MP',
                Ram: '64GB',
                Rom: '4GB',
                image: 'a10.jpg',
                Pkr: '40,000 PKR'
            },
            samsunga20: {
                Camera: '16MP',
                Ram: '128GB',
                Rom: '8GB',
                image: 'a20.jpg',
                Pkr: '40,000 PKR'
            },
            samsunga30: {
                Camera: '32MP',
                Ram: '256GB',
                Rom: '12GB',
                image: 'a30.jpg',
                Pkr: '40,000 PKR'
            },
        },
        iphone: {
            iphone11: {
                Camera: '12MP',
                Ram: '64GB',
                Rom: '4GB',
                image: 'ip11.jpg',
                Pkr: '40,000 PKR'
            },
            iphone12: {
                Camera: '16MP',
                Ram: '128GB',
                Rom: '8GB',
                image: '12.png',
                Pkr: '40,000 PKR'
            },
            iphone13: {
                Camera: '32MP',
                Ram: '256GB',
                Rom: '12GB',
                image: 'ip13.jpg',
                Pkr: '40,000 PKR'
            },
        },
        vivo: {
            vivos1: {
                Camera: '12MP',
                Ram: '64GB',
                Rom: '4GB',
                image: 's1.jpg',
                Pkr: '40,000 PKR'
            },
            vivos1pro: {
                Camera: '16MP',
                Ram: '128GB',
                Rom: '8GB',
                image: 's1pro.jpg',
                Pkr: '40,000 PKR'
            },
            vivoy51: {
                Camera: '32MP',
                Ram: '256GB',
                Rom: '12GB',
                image: 'y51.jpg',
                Pkr: '40,000 PKR'
            },
        },
        oppo: {
            oppof11: {
                Camera: '12MP',
                Ram: '64GB',
                Rom: '4GB',
                image: 'oppof11.jpg',
                Pkr: '40,000 PKR'
            },
            oppof12: {
                Camera: '16MP',
                Ram: '128GB',
                Rom: '8GB',
                image: 'oppof12.jpg',
                Pkr: '40,000 PKR'
            },
            oppof13: {
                Camera: '32MP',
                Ram: '256GB',
                Rom: '12GB',
                image: 'oppof13.jpg',
                Pkr: '40,000 PKR',
            },
        },
    }
};



function Add_Task() {
    let getinp_1 = document.getElementById('inp-mobiles').value;
    let lower = getinp_1.toLowerCase();
    let inpModels = document.getElementById('inp-models').value;
    let lowerModel = inpModels.toLowerCase();

    if (lower === "samsung" && lowerModel === 'samsunga10') {
        let data = object.mobiles.samsung.samsunga10;
        display.innerHTML = `<br /> <h1>${lowerModel}</h1> <br /><br /> 
        <img style="height:300px;" src="${data.image}" alt="Mobile Image"> <br /> <b /> Camera : ${data.Camera} <br /> <br />
       Ram : ${data.Ram} <br /> <br /> Rom : ${data.Rom} <br /><br /> Price : ${data.Pkr} <br />`;

    }

    else if (lower === "samsung" && lowerModel === 'samsunga20') {
        let data = object.mobiles.samsung.samsunga20;
        display.innerHTML = `<br /> <h1>${lowerModel}</h1> <br /><br /> 
    <img style=" width:250px; height:300px;" src="${data.image}" alt="Mobile Image"> <br /> <b /> Camera : ${data.Camera} <br /> <br />
   Ram : ${data.Ram} <br /> <br /> Rom : ${data.Rom} <br /><br /> Price : ${data.Pkr} <br />`;

    }
    else if (lower === "samsung" && lowerModel === 'samsunga30') {
        let data = object.mobiles.samsung.samsunga30;
        display.innerHTML = `<br /> <h1>${lowerModel}</h1> <br /><br /> 
  <img style="width:250px; height:300px;" src="${data.image}" alt="Mobile Image"> <br /> <b /> Camera : ${data.Camera} <br /> <br />
 Ram : ${data.Ram} <br /> <br /> Rom : ${data.Rom} <br /><br /> Price : ${data.Pkr} <br />`;

    }
    else if (lower === "iphone" && lowerModel === 'iphone11') {
        let data = object.mobiles.iphone.iphone11;
        display.innerHTML = `<br /> <h1>${lowerModel}</h1> <br /><br /> 
    <img style="width:250px; height:300px;" src="${data.image}" alt="Mobile Image"> <br /> <b /> Camera : ${data.Camera} <br /> <br />
   Ram : ${data.Ram} <br /> <br /> Rom : ${data.Rom} <br /><br /> Price : ${data.Pkr} <br />`;

    }
    else if (lower === "iphone" && lowerModel === 'iphone12') {
        let data = object.mobiles.iphone.iphone12;
        display.innerHTML = `<br /> <h1>${lowerModel}</h1> <br /><br /> 
  <img style="width:250px; height:300px;" src="${data.image}" alt="Mobile Image"> <br /> <b /> Camera : ${data.Camera} <br /> <br />
 Ram : ${data.Ram} <br /> <br /> Rom : ${data.Rom} <br /><br /> Price : ${data.Pkr} <br />`;

    }
    else if (lower === "iphone" && lowerModel === 'iphone13') {
        let data = object.mobiles.iphone.iphone13;
        display.innerHTML = `<br /> <h1>${lowerModel}</h1> <br /><br /> 
    <img style="width:250px; height:300px;" src="${data.image}" alt="Mobile Image"> <br /> <b /> Camera : ${data.Camera} <br /> <br />
   Ram : ${data.Ram} <br /> <br /> Rom : ${data.Rom} <br /><br /> Price : ${data.Pkr} <br />`;

    }
    else if (lower === "vivo" && lowerModel === 'vivos1') {
        let data = object.mobiles.vivo.vivos1;
        display.innerHTML = `<br /> <h1>${lowerModel}</h1> <br /><br /> 
    <img style="width:250px; height:300px;" src="${data.image}" alt="Mobile Image"> <br /> <b /> Camera : ${data.Camera} <br /> <br />
   Ram : ${data.Ram} <br /> <br /> Rom : ${data.Rom} <br /><br /> Price : ${data.Pkr} <br />`;

    }
    else if (lower === "vivo" && lowerModel === 'vivos1pro') {
        let data = object.mobiles.vivo.vivos1pro;
        display.innerHTML = `<br /> <h1>${lowerModel}</h1> <br /><br /> 
    <img style="width:250px; height:300px;" src="${data.image}" alt="Mobile Image"> <br /> <b /> Camera : ${data.Camera} <br /> <br />
   Ram : ${data.Ram} <br /> <br /> Rom : ${data.Rom} <br /><br /> Price : ${data.Pkr} <br />`;

    }
    else if (lower === "vivo" && lowerModel === 'vivoy51') {
        let data = object.mobiles.vivo.vivoy51;
        display.innerHTML = `<br /> <h1>${lowerModel}</h1> <br /><br /> 
  <img style="width:250px; height:300px;" src="${data.image}" alt="Mobile Image"> <br /> <b /> Camera : ${data.Camera} <br /> <br />
 Ram : ${data.Ram} <br /> <br /> Rom : ${data.Rom} <br /><br /> Price : ${data.Pkr} <br />`;

    }
    else if (lower === "oppo" && lowerModel === 'oppof11') {
        let data = object.mobiles.oppo.oppof11;
        display.innerHTML = `<br /> <h1>${lowerModel}</h1> <br /><br /> 
  <img style="width:250px; height:300px;" src="${data.image}" alt="Mobile Image"> <br /> <b /> Camera : ${data.Camera} <br /> <br />
 Ram : ${data.Ram} <br /> <br /> Rom : ${data.Rom} <br /><br /> Price : ${data.Pkr} <br />`;

    }
    else if (lower === "oppo" && lowerModel === 'oppof12') {
        let data = object.mobiles.oppo.oppof12;
        display.innerHTML = `<br /> <h1>${lowerModel}</h1> <br /><br /> 
    <img style="width:250px; height:300px;" src="${data.image}" alt="Mobile Image"> <br /> <b /> Camera : ${data.Camera} <br /> <br />
   Ram : ${data.Ram} <br /> <br /> Rom : ${data.Rom} <br /><br /> Price : ${data.Pkr} <br />`;

    }
    else if (lower === "oppo" && lowerModel === 'oppof13') {
        let data = object.mobiles.oppo.oppof13;
        let display = document.getElementById("display");
        display.innerHTML = `<br /> <h1>${lowerModel}</h1> <br /><br /> 
  <img style="width:250px; height:300px;" src="${data.image}" alt="Mobile Image"> <br /> <b /> Camera : ${data.Camera} <br /> <br />
 Ram : ${data.Ram} <br /> <br /> Rom : ${data.Rom} <br /><br /> Price : ${data.Pkr} <br />`;

    }
    else {
        display.innerHTML = `<p style="margin: 300px auto;">Data Not Found</p>`
    }
}
Add_Task();



















