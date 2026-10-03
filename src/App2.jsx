import Ksiaski from "./komponenty/ksiaski";

  const ksiaski = [
    { id: 1, name: "Noce i Dnie" },
    { id: 2, name: "Wesele" },
    { id: 3, name: "opera dla każdego" },
    { id: 4, name: "Gotowanie w rękawie" },
    { id: 5, name: "Programowanie i Naprawianie" }
  ];
  const pracownicy = [
    { id: 1, name: "Jola", godziny: 30, zawód: "programista/JS" },
    { id: 2, name: "ciola", godziny: 20, zawód: "sekretarka" },
    { id: 3, name: "Lola", godziny: 35, zawód: " ekspert ds. finansów " },
    { id: 4, name: "babunia", godziny: 60, zawód: " doświadczony gracz LigoLego " },
    { id: 5, name: "Hou'lei", godziny: 10, zawód: "nowincjusz" },
  ];

  return (
    <>
      <main>
        <p>


          <Technologie />

          {pracownicy.map((pracownik) => (
            <Pracownicy name={pracownik.id + " " + pracownik.name + " " + pracownik.godziny + " " + pracownik.zawód} />
          ))}
          <br></br>
          {ksiaski.map((książka) => (
            <Pracownicy name={książka.id + " " + książka.name} />
          ))}
        </p>
      </main>
    </>
  )


export default App
