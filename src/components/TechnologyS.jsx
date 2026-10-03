function TechnologyS({id, name, kategoria, ileczasu}){
    const rodzajetechnologi = [
        {id: 1, name: "HTML", kategoria: "strony internetowe", ileczasu: 30 },
        {id: 2, name: "CSS", kategoria: "strony internetowe", ileczasu: 10 },
        {id: 3, name: "JAVASCRIPT", kategoria: " zaawansowane strony internetowe", ileczasu: 50 },
        {id: 4, name: "REACT", kategoria: "zawawnsowane strony internetowe", ileczasu: 35 },
        {id: 5, name: "EXPRESS",kategoria: "Backend", ileczasu: 25 },
        {id: 6, name: "MongoDB",kategoria: "Baza danych", ileczasu: 25 },
        {id: 7, name: "MariaDB",kategoria: "Baza danych", ileczasu: 25 }
    ];

    return(
        <>
        <section>
            <h2>React</h2>
            <p>Biblioteka Frontendowa</p>
            <p>Liczba godzin: 30</p>
        </section>
        {rodzajetechnologi.map((rodzaj) =>{
            return ((<p>{rodzaj.id}</p>))
        }
        )}
        <br></br>
        
        </>

    );

}
export default TechnologyS;