import React from 'react';
//import MarcheService from '../services/MarcheService';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
let button

class MarcheComponent extends React.Component {
    constructor(props){
        super(props)
        this.ajoutermarche = this.ajoutermarche.bind(this);
        this.modifiermarcher = this.modifiermarcher.bind(this)
        this.state = {
            marches:[],
            id: '',
            nom: '',
            emplacement: '',
            heure_ouverture: '',
            heure_fermeture: '',
            nbre_hangars: '',
        }
    }

    ajoutermarche() {
         button = document.querySelector(".button");
        let ajoutMarcher = document.getElementById('ajoutMarche')
        ajoutMarcher.addEventListener('click', ()=>{
            let nomMarcher = document.getElementById('nomMarcher')
            nomMarcher.innerHTML +=('<b>nom du marché</b>')
            let nomMarche = document.getElementById('nomMarche')
            let nomMarcheInput = document.createElement('input')
               nomMarche.append(nomMarcheInput)
            
            let emplacementMarcher = document.getElementById('emplacementMarcher')
            emplacementMarcher.innerHTML +=('<b>emplacement du marché</b>')
            let emplacementMarcherInput = document.getElementById('emplacementMarcherInput')
            let emplacementMarcherInput2 = document.createElement('input')
            emplacementMarcherInput.append(emplacementMarcherInput2)

            let heureouverture = document.getElementById('heureouverture')
                heureouverture.innerHTML +=("<b>heure d'ouverture</b>")
            let heureouvertureInput = document.getElementById('heureOuvertureInput')
            let heureouvertureInput2 = document.createElement('input')
            heureouvertureInput2.type = 'time'
            heureouvertureInput.append(heureouvertureInput2)

            let heurefermeture = document.getElementById('heurefermeture')
                heurefermeture.innerHTML +=("<b>heure de fermeture</b>")
            let heurefermetureInput = document.getElementById('heurefermetureInput')
            let heurefermetureInput2 = document.createElement('input')
            heurefermetureInput2.type = 'time'
            heurefermetureInput.append(heurefermetureInput2)

            let nbrehangars = document.getElementById('nbrehangars')
            nbrehangars.innerHTML +=("<b>nombre de hangars</b>")
            let nbrehangarsInput = document.getElementById('nbreHangarsInput')
            let nbrehangarsInput2 = document.createElement('input')
            nbrehangarsInput2.type = 'number'
            //nbrehangarsInput2.value = '0'
            nbrehangarsInput.append(nbrehangarsInput2)
        
            let valider = document.getElementById('valider')
            let validerbutton = document.createElement('input')
            validerbutton.type ='button'
            validerbutton.value = 'valider'
            valider.append(validerbutton)
            validerbutton.addEventListener('click', ()=>{
            nomMarcher.remove(nomMarcher)
            nomMarche.remove(nomMarcheInput)
            emplacementMarcher.remove(emplacementMarcher)
            emplacementMarcherInput.remove(emplacementMarcherInput2)
            heureouverture.remove(heureouverture)
            heureouvertureInput.remove(heureouvertureInput2)
            heurefermeture.remove(heurefermeture)
            heurefermetureInput.remove(heurefermetureInput2)
            nbrehangars.remove(nbrehangars)
            nbrehangarsInput.remove(nbrehangarsInput2)
            valider.remove(validerbutton)
            let a = nomMarcheInput.value
            let b = emplacementMarcherInput2.value
            let c = heureouvertureInput2.value
            let d = heurefermetureInput2.value
            let e = nbrehangarsInput2.value
            fetch("http://localhost:8080/marche/ajouter/add", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
               "nom": a,
               "emplacement": b,
               "heure_ouverture": c,
               "heure_fermeture": d,
               "nbre_hangars": e })
              
               
              })
              .then(response =>{ console.log(response)
                window.location.reload(false);})
              .then(response => {
                this.setState({
                  marches: response
                })
              })
              .catch(err => { console.log(err); 
              });
            button.disabled = false;
        })
        
        button.disabled = true;
        })
        
      }

      supprimermarcher(id){

        fetch(`http://localhost:8080/marche/delete/`+id, {
            "method": "DELETE",
          })
          .then(response => response.json())
          .then(response => {
            this.setState({
              marches: response
            })
          })
          .catch(err => { console.log(err); 
          });
          alert("êtes vous sûr(e)? \n cette action est irreversible")
          window.location.reload(false);
      }

      modifiermarcher(id){
        let button2 = document.querySelector(".button2");
        let modifierMarcher = document.getElementById('modifiermarcher')
        modifierMarcher.addEventListener('click', ()=>{
          
          let nomMarcher = document.getElementById('nomMarcher')
          nomMarcher.innerHTML +=('<b>nom du marché</b>')
          let nomMarche = document.getElementById('nomMarche')
          let nomMarcheInput = document.createElement('input')
             nomMarche.append(nomMarcheInput)
             let emplacementMarcher = document.getElementById('emplacementMarcher')
             emplacementMarcher.innerHTML +=('<b>emplacement du marché</b>')
             let emplacementMarcherInput = document.getElementById('emplacementMarcherInput')
             let emplacementMarcherInput2 = document.createElement('input')
             emplacementMarcherInput.append(emplacementMarcherInput2)
 
             let heureouverture = document.getElementById('heureouverture')
                 heureouverture.innerHTML +=("<b>heure d'ouverture</b>")
             let heureouvertureInput = document.getElementById('heureOuvertureInput')
             let heureouvertureInput2 = document.createElement('input')
             heureouvertureInput2.type = 'time'
             heureouvertureInput.append(heureouvertureInput2)
 
             let heurefermeture = document.getElementById('heurefermeture')
                 heurefermeture.innerHTML +=("<b>heure de fermeture</b>")
             let heurefermetureInput = document.getElementById('heurefermetureInput')
             let heurefermetureInput2 = document.createElement('input')
             heurefermetureInput2.type = 'time'
             heurefermetureInput.append(heurefermetureInput2)
 
             let nbrehangars = document.getElementById('nbrehangars')
             nbrehangars.innerHTML +=("<b>nombre de hangars</b>")
             let nbrehangarsInput = document.getElementById('nbreHangarsInput')
             let nbrehangarsInput2 = document.createElement('input')
             nbrehangarsInput2.type = 'number'
             //nbrehangarsInput2.value = '0'
             nbrehangarsInput.append(nbrehangarsInput2)
         
             let valider = document.getElementById('valider')
             let validerbutton = document.createElement('input')
             validerbutton.type ='button'
             validerbutton.value = 'valider'
             valider.append(validerbutton)
             validerbutton.addEventListener('click', ()=>{
              nomMarcher.remove(nomMarcher)
              nomMarche.remove(nomMarcheInput)
              emplacementMarcher.remove(emplacementMarcher)
              emplacementMarcherInput.remove(emplacementMarcherInput2)
              heureouverture.remove(heureouverture)
              heureouvertureInput.remove(heureouvertureInput2)
              heurefermeture.remove(heurefermeture)
              heurefermetureInput.remove(heurefermetureInput2)
              nbrehangars.remove(nbrehangars)
              nbrehangarsInput.remove(nbrehangarsInput2)
              valider.remove(validerbutton)
              fetch(`http://localhost:8080/marche/update/`+id, {
            "method": "PUT",
          })
          .then(response => response.json())
          .then(response => {
            this.setState({
              marches: response
            })
          })
          .catch(err => { console.log(err); 
          });
          //button2.disabled = false
          window.location.reload(false);
        })
        button2.disabled = true
      })
     // alert("modification \n idSuppression =" + id )
          
      }

    componentDidMount(){
        fetch("http://localhost:8080/marche/marches", {
            "method": "GET",
          })
          .then(response => response.json())
          .then(response => {
            this.setState({
              marches: response
            })
          })
          .catch(err => { console.log(err); 
          });
        }
    
    render (){
        return (
            <div>
                <h1 className = "text-center" color='red'> Liste des Marches</h1>
                <table className = "table table-striped">   
                    <thead>
                        <tr>
                            <td> Id</td>
                            <td> Nom</td>
                            <td> Emplacement</td>
                            <td> Heure ouverture</td>
                            <td> Heure fermeture</td>
                            <td> Nbre hangars</td>
                            <td> Actions</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.marches.map(
                                marche =>
                                <tr key = {marche.id}>
                                    <td> {marche.id}</td> 
                                     <td> {marche.nom}</td>   
                                     <td> {marche.emplacement}</td>   
                                     <td> {marche.heure_ouverture}</td>   
                                     <td> {marche.heure_fermeture}</td> 
                                     <td> {marche.nbre_hangars}</td>
                                     <td><Button onClick={()=>this.supprimermarcher(marche.id) }>supprimer marché</Button></td>
                                    <td><Button onClick={()=>this.modifiermarcher(marche.id)} id="modifiermarcher" className='button2'>modifiez marché</Button></td>
                                </tr>
                            )
                            
                        }
                    </tbody>

                </table>
                <Button onClick={this.ajoutermarche} id="ajoutMarche" className='button'>ajouter marché</Button>
                <div id='nomMarcher'></div>
                <div id='nomMarche'></div>

                <div id='emplacementMarcher'></div> 
                <div id='emplacementMarcherInput'></div> 

                <div id='heureouverture'></div> 
                <div id='heureOuvertureInput'></div>

                <div id='heurefermeture'></div> 
                <div id='heurefermetureInput'></div> 

                <div id='nbrehangars'></div> 
                <div id='nbreHangarsInput'></div><br></br>
                <div id='valider'></div> 
                
                
            </div>                
        )
    }
}

export default MarcheComponent