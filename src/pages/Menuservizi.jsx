import styled, { css } from "styled-components";
import ScrittaCorpoPagina from "../ui/ScrittaCorpoPagina";

import Footer from "../ui/Footer";

import { LiaWhatsapp } from "react-icons/lia";
import RowMenuServizi from "../features/MenuServizi/RowMenuServizi";

import { ContainerRowMenuServizi } from "../features/MenuServizi/ContainerRowMenuServizi";

import ToggleArrowMenuServizi from "../features/MenuServizi/ToggleArrowMenuServizi";
import PSeparatore from "../ui/PSeparatore";
import VideoFotoIniziale from "../ui/VideoFotoIniziale";

const ContainerMenuservizi = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4%;
  /* padding-bottom: 4rem; */
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    ${(props) =>
      props.type === "primo" &&
      css`
        padding-top: 10rem;
      `}
    padding-left: 30%;
    padding-right: 14%;
    /* padding-bottom: 10rem; */
  }
  @media only screen and (min-width: 1201px) {
    ${(props) =>
      props.type === "primo" &&
      css`
        padding-top: 10rem;
      `}
    /* padding-bottom: 10rem; */
    padding-left: 20%;
    padding-right: 14%;
  }
`;

const StyledFaWhatsapp = styled(LiaWhatsapp)`
  font-weight: 400;
  margin-top: 3rem;
  font-size: 4rem;
  color: var(--color-gold);
  filter: drop-shadow(1px 1px 1px var(--color-grey-300));
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-20%);
  }
`;

function Menuservizi() {
  const servizi = {
    styling: [
      {
        titolo: "Taglio sartoriale e piega",
        prezzo: "47",
        descrizione:
          "Presso il nostro salone, offriamo un servizio di taglio sartoriale, è un'esperienza personalizzata che prende in considerazione la morfologia del viso, la texture dei capelli e le abitudini quotidiane di ogni cliente. I nostri esperti collaborano attentamente con te per comprendere le tue esigenze e offrirti consigli mirati in base alla consulenza. Il risultato finale è un taglio che mette in risalto la tua bellezza naturale e che riflette la tua individualità.",
      },
      {
        titolo: "Piega",
        prezzo: "da 24",
        descrizione:
          "I nostri hairstylist si dedicano a creare asciugature impeccabili e personalizzate per soddisfare le esigenze individuali di ogni cliente. Sia che tu stia cercando un look elegante per un'occasione speciale o desideri semplicemente un tocco di glamour nella tua routine quotidiana, il nostro team è qui per trasformare la tua visione in realtà.",
      },
      {
        titolo: "Rifinitura doppie punte ",
        prezzo: "18",
        descrizione:
          "Taglio eseguito su capelli asciutti dopo una schiaritura per andare a definire gli ultimi centimetri della lunghezza, la famosa spuntatina.",
      },
      {
        titolo: "Taglio maschile",
        prezzo: "24",
        descrizione:
          "Con il nostro servizio di taglio maschile, ti offriamo molto più di una semplice visita dal parrucchiere. I nostri esperti lavorano con precisione e attenzione ai dettagli per creare un look su misura che si adatti perfettamente alla tua personalità e al tuo viso . Che tu stia cercando un taglio classico o se desideri sperimentare un look più audace e moderno, siamo qui per realizzare il tuo desiderio.",
      },
      {
        titolo: "HAIRUP & BRAIDS",
        prezzo: "da convenire",
        descrizione:
          "Crea un'impressione indelebile con il nostro servizio di styling per eventi speciali. Dalle trecce boho-chic agli eleganti raccolti, il nostro team di esperti trasforma i tuoi capelli in opere d'arte, perfette per ogni occasione. Che si tratti di un matrimonio, una cena elegante o una serata fuori con gli amici, le nostre acconciature personalizzate ti faranno brillare e sentirti sicura di te in ogni momento.",
      },
    ],
    colorCouture: [
      {
        titolo: "All over color",
        prezzo: "da 40",
        descrizione:
          "Un colore personalizzato in base alla consulenza del tuo tecnico, eseguito solitamente per coprire i capelli bianchi ogni  3/4 settimane",
      },
      {
        titolo: "Glaze",
        prezzo: "da 20",
        descrizione:
          "Enfatizza o modifica la tonalità dei tuoi capelli, sempre eseguito dopo le schiariture per dare una tonalità unica.È un ottimo mantenimento fra una sessione di colore e l’altra",
      },
      {
        titolo: "Golden Aura",
        prezzo: "da 85",
        descrizione:
          "E' un servizio di schiariture che parte dalle radici, perfetto per chi vuole vedersi molto chiara su tutti i capelli, anche sulla base, dando tridimensionalità al suo colore naturale)",
      },
      {
        titolo: "Partial Golden Aura",
        prezzo: "da 65",
        descrizione:
          "Cosa cambia da quello precedente? La quantità di schiaritura è concentrata sulla sommità, ideale come mantenimento dopo 8/10 settimane aver fatto il servizio Golden Aura.",
      },
      {
        titolo: "Total Bleached",
        prezzo: "da 95",
        descrizione:
          "Se cerchi un cambio look di grande personalità e vuoi schiarire completamente tutti i tuoi capelli dalla radice alle punte, questo è il servizio che fa per te",
      },
      {
        titolo: "Full blending",
        prezzo: "da 85",
        descrizione:
          "Il Full Blending è come dipingere delicatamente i tuoi capelli con un effetto di scrittura naturale e graduale , Con questa tecnica il capello viene schiarito creando un effetto luminoso e multidimensionale, con sfumature che si fondono armoniosamente con il tuo colore naturale dei capelli. È perfetto per aggiungere movimento e luminosità alla tua chioma.Per un look a prova di Pinterest!",
      },
      {
        titolo: "Soft  blending",
        prezzo: "da 65",
        descrizione:
          "Cosa cambia dal full? La quantità di capelli schiarita è minore, per dare movimento alle lunghezze ma con un effetto ancora più  naturale, come se fossero schiariti dal sole. Mantenimento medio-basso",
      },
      {
        titolo: "SHADOWING",
        prezzo: "da 75",
        descrizione:
          "Lo Shadowing è come dare ai tuoi capelli un makeover in 3D! Utilizziamo diverse tonalità di colore per creare ombre e luci che accentuano le caratteristiche del tuo viso e dei tuoi capelli, aggiungendo profondità e dimensione. È come scolpire i tuoi capelli per valorizzare al meglio la tua bellezza naturale.  ",
      },
    ],
    technical: [
      {
        titolo: "A CURL CAN DREAM",
        prezzo: "da 60",
        descrizione:
          "Esalta la bellezza naturale dei tuoi capelli con il nostro servizio di ondulazione professionale. Grazie alla nostra esperienza e alle tecniche all'avanguardia, creiamo onde morbide o ricci definiti che si adattano perfettamente alla tua personalità e al tuo stile di vita. Con un'attenzione meticolosa ai dettagli e l'uso di prodotti di altissima qualità, garantiamo risultati duraturi e impeccabili. Affidati al nostro team di professionisti per ottenere un’ondulazione che aggiunga volume, movimento o un tocco di glamour alla tua chioma, per un look che ti farà sentire unica in ogni occasione.",
      },
      {
        titolo: "LUXE SMOOTHING",
        prezzo: "da 200",
        descrizione:
          "Sogni i tuoi capelli lisci e impeccabili? Il nostro servizio di trattamento alla keratina è la risposta ai tuoi desideri. trasforma i capelli ribelli e crespi in una morbida seta, la nostra formula innovativa a base di keratina doma i ricci più indomabili ed elimina il crespo senza compromettere la vitalità dei tuoi capelli. Dimentica le lunghe ore trascorse a lisciare la tua chioma ogni mattina e goditi la libertà di capelli perfettamente lisci, fluidi e lucenti, grazie al nostro trattamento alla keratina. Abbraccia la bellezza senza sforzo e la praticità di una chioma impeccabile in ogni situazione.Durata fino a cinque mesi. Mantenimento semplice at home con 2 prodotti.",
      },
      {
        titolo: "WHY BE FRIZZ",
        prezzo: "da 100",
        descrizione:
          "Goditi una chioma dall'aspetto naturale e senza crespo con il nostro trattamento ANTIFRIZZ personalizzato. Con la nostra formula speciale, idratiamo e eliminiamo il crespo dai tuoi capelli mentre preserviamo il loro naturale movimento. Il risultato? Capelli lussuosi, morbidi e gestibili, con la tua ondulazione, che aggiunge movimento e vitalità al tuo look per riflettere la tua bellezza in ogni occasione.",
      },
      {
        titolo: "Extentions",
        prezzo: "da convenire",
        descrizione:
          "Esaudisci il tuo sogno di una chioma lunga e lussuosa con il nostro servizio di extension. Con l'utilizzo di extension di altissima qualità e la nostra competenza nell'applicazione, trasformiamo istantaneamente la tua chioma, aggiungendo lunghezza, volume e spessore su misura per te. Che tu desideri un look pieno di volume o un tocco di lunghezza e definizione, il nostro team di esperti ti offre soluzioni personalizzate per ottenere un risultato impeccabile e naturale. Sogna in grande e scopri il potere strabiliante delle extension, per una chioma che ti farà sentire a tuo agio in ogni occasione.",
      },
      {
        titolo: "Color correction",
        prezzo: "da convenire",
        descrizione:
          "Con correzione colore intendiamo un servizio in cui dobbiamo rimuovere un colore fatto in precedenza o sistemare un lavoro sbagliato fatto in casa o in salone.La correzione comporta un lavoro complesso e delicato, in base allo stato di salute del capello ci potrebbero volere più sedute per arrivare al risultato finale desiderato.Preservare la qualità del capello è la nostra priorità. Questo servizio richiede una consulenza in salone e un test prova del capello prima della prenotazione.",
      },
    ],
    ludwigRituals: [
      {
        titolo: "Essential ritual",
        prezzo: "14",
        descrizione:
          "I nostri Essential ritual sono una serie di trattamenti per qualsiasi esigenza del capello, grazie alla tecnologia nanomolecolare otterrai una bellezza impeccabile, in tempi record, senza compromessi.",
      },
      {
        titolo: "Intense ritual",
        prezzo: "25-30",
        descrizione:
          "I nostri Intense ritual offrono una soluzione a qualsiasi necessità, hanno una efficacia maggiore e più duratura nel tempo. Sono tutti enfatizzati da una nuovissima tecnologia di nebulizzazione che ti spiegheranno i nostri esperti in salone.",
      },
      {
        titolo: "Reborn ritual (o First class ritual)",
        prezzo: "50",
        descrizione:
          "I nostri First class ritual offrono un viaggio indulgente verso la perfezione dei capelli. Formulato con ingredienti selezionati e tecnologie innovative, questo trattamenti trasformano istantaneamente i capelli opachi, danneggiati, assottigliati e privi di vitalità in una chioma radiosa, setosa e voluminosa. I capelli vengtamento è pensato per coccolare i capelli e il cuoio capelluto, offrendo un momento di puro benessere e relax. Lasciati avvolgere dall'aura di prestigio e bellezza, e regala ai tuoi capelli l'attenzione e la cura che meritano con i nostri trattamenti FIRST CLASS",
      },
    ],
  };

  const PI = styled.p`
    /* font-size: 2.5rem; */
  `;

  return (
    <>
      <VideoFotoIniziale
        tipo="video"
        autoPlay
        muted
        loop
        src="/menuservizi.mp4"
        type="video/mp4"
      />

      <ContainerMenuservizi type="primo">
        <ScrittaCorpoPagina>
          <PI>
            Il cliente è il centro del nostro mondo.
            <br />
            Scoprite il nostro catalogo di servizi esclusivi e prenotate un
            appuntamento.
          </PI>
          <PI>
            Se desiderate una <b>consulenza gratuita</b> senza impegno, per
            maggiori informazioni sui nostri trattamenti o per comunicarci
            esigenze particolari prima di prenotare, chattate direttamente con
            uno dei nostri stylist cliccando sull'icona sotto. Il team di Ludwig
            è a vostra disposizione.
            <p>
              <a href="https://wa.me/+393661574143">
                <StyledFaWhatsapp />
              </a>
            </p>
          </PI>

          <PSeparatore />
        </ScrittaCorpoPagina>
      </ContainerMenuservizi>
      {Object.entries(servizi).map((el, i, arr) => (
        <ContainerRowMenuServizi>
          <ContainerMenuservizi>
            <ScrittaCorpoPagina type="servizi">
              <ContainerRowMenuServizi.H2o dorata={true}>
                {el[0].match(/[A-Z]/g)
                  ? el[0].replace(/([A-Z])/g, " $1")
                  : el[0]}
              </ContainerRowMenuServizi.H2o>
              <ToggleArrowMenuServizi />
            </ScrittaCorpoPagina>
            <PSeparatore type="gold" />
          </ContainerMenuservizi>

          {el[1].map(({ titolo, prezzo, descrizione }, i, arr) => (
            <RowMenuServizi
              titolo={titolo}
              prezzo={prezzo}
              descrizione={descrizione}
              ultimo={i === arr.length - 1 && true}
            ></RowMenuServizi>
          ))}
        </ContainerRowMenuServizi>
      ))}

      <Footer page="menuservizi" />
    </>
  );
}

export default Menuservizi;
