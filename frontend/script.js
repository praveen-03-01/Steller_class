function predict() {


    let alpha = document.getElementById("alpha").value;
    let delta = document.getElementById("delta").value;
    let u = document.getElementById("u").value;
    let g = document.getElementById("g").value;
    let r = document.getElementById("r").value;
    let i = document.getElementById("i").value;
    let z = document.getElementById("z").value;
    let redshift = document.getElementById("redshift").value;



   

    if (
        alpha === "" ||
        delta === "" ||
        u === "" ||
        g === "" ||
        r === "" ||
        i === "" ||
        z === "" ||
        redshift === ""
    ) {

        document.getElementById("result").innerHTML =
        "Please enter all information";

        return;

    }



    let data = {


        alpha:Number(alpha),

        delta:Number(delta),

        u:Number(u),

        g:Number(g),

        r:Number(r),

        i:Number(i),

        z:Number(z),

        redshift:Number(redshift),


        spectral_type:
        document.getElementById("spectral_type").value,


        galaxy_population:
        document.getElementById("galaxy_population").value

    };



    fetch(
        "http://127.0.0.1:5000/predict",
        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        }
    )


    .then(response => response.json())


    .then(result => {


        if(result.error){


            document.getElementById("result").innerHTML =
            result.error;


        }

        else{


            // Show result on same page

            document.getElementById("result").innerHTML =

            `
            <div class="result-card">

            <h2>Prediction Result</h2>

            <div class="circle">

            ${result.prediction}

            </div>


            <p>
            Stellar classification completed successfully.
            </p>


            </div>
            `;
        (result => {

    let prediction = result.prediction;


    let history = JSON.parse(
        localStorage.getItem("predictionHistory")
    ) || [];


    history.push({

        date:new Date().toLocaleString(),

        alpha:data.alpha,

        delta:data.delta,

        redshift:data.redshift,

        spectral_type:data.spectral_type,

        galaxy_population:data.galaxy_population,

        prediction:prediction

    });


    localStorage.setItem(
        "predictionHistory",
        JSON.stringify(history)
    );


});

        }


    })


    .catch(error=>{


        document.getElementById("result").innerHTML =

        "Backend connection error";


        console.log(error);


    });


}