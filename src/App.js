
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="idTitle">Formulaire d'Inscription</h1>
      <form>

        <div className="form-group row">
          <label for="example-text-input" className="col-2 col-form-label">Nom</label>
          <div class="col-10">
            <input className="form-control" type="text" id="idNomInput" placeholder="Entrez votre nom" />
          </div>
        </div>

        <div className="form-group row">
          <label for="example-text-input" className="col-2 col-form-label">Prenom</label>
          <div class="col-10">
            <input className="form-control" type="text" id="idPrenomInput" placeholder="Entrez votre prénom" />
          </div>
        </div>

        <div className="form-group row">
          <label for="example-date-input" className="col-2 col-form-label">Genre</label>
          <div className="col-10">
            <select className="form-select" aria-label="Default select example">
              <option value="2">Male</option>
              <option value="3">Female</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label for="example-date-input" className="col-2 col-form-label">Date </label>
          <div class="col-10">
            <input className="form-control" type="date" id="idDateInput" placeholder="2011-08-19" />
          </div>
        </div>

        <div className="form-group row">
          <label for="example-email-input" className="col-2 col-form-label">E-mail</label>
          <div class="col-10">
            <input className="form-control" type="email" id="idEmailInput" placeholder="exemple@gomycode.com" />
          </div>
        </div>

        <div className="form-group row">
          <label for="example-password-input" className="col-2 col-form-label">Password</label>
          <div className="col-10">
            <input className="form-control" type="password" id="idPasswordInput" />
          </div>
        </div>
        <div className="form-group row">
          <label for="example-password-input" className="col-2 col-form-label">Confirmer</label>
          <div className="col-10">
            <input className="form-control" type="password" id="idPasswordInputConfirm" />
          </div>
        </div>

        <div className="form-group row">
          <label for="example-tel-input" className="col-2 col-form-label">N° Tel</label>
          <div class="col-10">
            <input className="form-control" type="tel" id="idTelInput" placeholder="98.999.999" />
          </div>
        </div>
        <div className="buttons">
          <button type="submit" class="btn btn-primary">Submit</button>
          <button type="submit" class="btn btn-primary">Annuler</button>
        </div>

      </form>
    </div>
  );
}

export default App;
