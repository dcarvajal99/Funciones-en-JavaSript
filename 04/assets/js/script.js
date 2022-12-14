            colora = 'white'
            document.addEventListener('keydown',  color =  (event)=> {
                if (event.key === 'a') {
                colora = 'grey';
                console.log(colora)
                } else if (event.key === 's') {
                colora = 'brown';
                console.log(colora)
                } else if (event.key === 'd') {
                colora ='purple';
                console.log(colora)
                }else {
                    color = 'white'
                    console.log("No ha seleccionado tecla valida, por ende tiene color "+color)
                }
                })

                /* Actualmente reducí las lineas de codigo este event listener reemplaza lo de abajo */
                /* REDUCE MUCHAS LINEAS DE CODIGO */
                document.querySelectorAll(".click").forEach(el => {
                el.addEventListener("click", e => {
                    const id = e.target.getAttribute("id");
                    document.getElementById(id).style.background = colora
                    console.log("se ha puesto de color "+colora+ " el div "+id)
                });
                });


                /* idUno = document.getElementById("id1")
                idDos = document.getElementById("id2")
                idTres = document.getElementById("id3")
                idCuatro = document.getElementById("id4")
                idUno.addEventListener("click",
                cambiarColor =() =>{
                    idUno.style.background = color
                    }
                );
                idDos.addEventListener("click",
                cambiarColor =() =>{
                    idDos.style.background = color
                    }
                );
                idTres.addEventListener("click",
                cambiarColor =() =>{
                    idTres.style.background = color
                    }
                );
                idCuatro.addEventListener("click",
                cambiarColor =() =>{
                    idCuatro.style.background = color
                    }
                ); */


            