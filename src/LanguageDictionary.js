import { Typography } from "@mui/material";
import UnderlinedLink from "./components/shared/UnderlinedLink";

// languageDictionary is used to store strings and components in English and Spanish
// Example usage languageDictionary.registerToVote[language]
// Where language is the React state variable we use to store which language is being displayed

export const languageDictionary = {
  registerToVote: {
    en: "Register to vote",
    es: "Registrase para votar",
  },
  voteInPerson: {
    en: "Vote in person",
    es: "Votar en persona",
  },
  voteByMail: {
    en: "Vote by mail",
    es: "Votar por correo",
  },
  dropOffYourBallot: {
    en: "Drop off your ballot",
    es: "Deje su boleta",
  },
  resources: {
    en: "Resources",
    es: "Recursos",
  },
  electionResults: {
    en: "Election results",
    es: "Resultados de las elecciones",
  },
  electionInfoPennsylvania: {
    en: "VOTING INFORMATION FOR PENNSYLVANIANS",
    es: "INFORMACTION DE VOTACION PARA LOS RESIDENTES DE PENSILVANIA",
  },
  votingEligibilityTitle: {
    en: "Voting Eligibility",
    es: "Elegibilidad para votar",
  },
  votingEligibilityBody: {
    en: (
      <>
        In order to vote you must be:
        <ul>
          <li>
            A United States citizen for at least one month before the next
            election
          </li>
          <li>
            A resident of Pennsylvania and the district in which you register
            and vote for at least 30 days before the next election
          </li>
          <li>At least 18 years of age by the day of the next election</li>
          <li>
            In order to vote in a primary, you must be registered in a political
            party
          </li>
        </ul>
      </>
    ),
    es: (
      <>
        Para poder votar, usted debe ser:
        <ul>
          <li>
            Ser ciudadano de los Estados Unidos durante al menos un mes antes de
            las próximas elecciones.
          </li>
          <li>
            Ser residente de Pensilvania y del distrito en el que se registra y
            vota durante al menos 30 días antes de las próximas elecciones.
          </li>
          <li>
            Al menos 18 años de edad para el día de las próximas elecciones.
          </li>
          <li>
            Para poder votar en una primaria, debe estar registrado en un
            partido político.
          </li>
        </ul>
      </>
    ),
  },
  registrationDeadlineTitle: {
    en: "Registration deadline",
    es: "Fecha limite de registro",
  },
  registrationDeadlineBody: {
    en: (
      <Typography fontStyle="italic">
        The deadline for registering to vote in Pennsylvania is 15 days before
        each election.
      </Typography>
    ),
    es: (
      <Typography fontStyle="italic">
        La fecha límite para registrarse para votar en Pensilvania es 15 días
        antes de cada elección.
      </Typography>
    ),
  },
  registerToVoteTitle: {
    en: "Register to vote",
    es: "Registrarse para votar",
  },
  registerToVoteBody: {
    en: (
      <>
        Access the PA Online Voter registration form{" "}
        <a href="https://www.vote.pa.gov/Resources/Documents/Voter_Registration_Application_English.pdf">
          here
        </a>
        , or print your registration form{" "}
        <a href="https://www.vote.pa.gov/Resources/Documents/Voter_Registration_Application_English.pdf">
          here.
        </a>{" "}
        You can submit your registration
        <ul>
          <li>
            <UnderlinedLink
              link="https://www.vote.pa.gov/Resources/Documents/Voter_Registration_Application_English.pdf"
              text="Online"
            />
          </li>
          <li>In person at your county voter registration office</li>
          <li>By mail to your county voter registration office</li>
        </ul>
      </>
    ),
    es: (
      <>
        Acceda al formulario de registro de votante en línea de PA{" "}
        <a href="https://www.vote.pa.gov/Resources/Documents/Voter_Registration_Application_English.pdf">
          aquí
        </a>
        , o imprima su formulario de registro{" "}
        <a href="https://www.vote.pa.gov/Resources/Documents/Voter_Registration_Application_English.pdf">
          aquí.
        </a>{" "}
        Pueden enviar su registro
        <ul>
          <li>
            <UnderlinedLink
              link="https://www.vote.pa.gov/Resources/Documents/Voter_Registration_Application_English.pdf"
              text="En línea"
            />
          </li>
          <li>
            En persona en la oficina de registro de votantes de su condado
          </li>
          <li>Por correo a la oficina de registro de votantes de su condado</li>
        </ul>
      </>
    ),
  },
  checkYourVoterRegistrationTitle: {
    en: "Check your voter registration",
    es: "Verifique su registro de votante",
  },
  checkYourVoterRegistrationBody: {
    en: (
      <>
        Check your voter registration <a href="https://www.google.com/">here</a>
      </>
    ),
    es: (
      <>
        Verifique su registro de votante{" "}
        <a href="https://www.google.com/">aquí</a>
      </>
    ),
  },
  changeYourNameOrAddressTitle: {
    en: "Change your name or address",
    es: "Cambia su nombre o dirección.",
  },
  changeYourNameOrAddressBody: {
    en: (
      <>
        Select the box that says “Change of Name” and/or “Change of Address” on
        the <a href="https://www.google.com/">voter registration form</a>.
      </>
    ),
    es: (
      <>
        Seleccione la casilla que dice "Cambio de nombre" y/o "Cambio de
        dirección" en la{" "}
        <a href="https://www.google.com/">formulario de registro de votantes</a>
        .
      </>
    ),
  },
  voteInPersonEarlyTitle: {
    en: "Vote in person Early",
    es: "Vote en persona temprano",
  },
  voteInPersonEarlyBody: {
    en: (
      <>
        Registered voters can apply for a mail ballot in person at their{" "}
        <a href="https://www.vote.pa.gov/Resources/Pages/Contact-Your-Election-Officials.aspx">
          county election board office
        </a>
        , then complete and cast the ballot there.
      </>
    ),
    es: (
      <>
        Los votantes registrados pueden solicitar una boleta por correo en
        persona en su{" "}
        <a href="https://www.vote.pa.gov/Resources/Pages/Contact-Your-Election-Officials.aspx">
          oficina de la junta electoral del condado
        </a>
        , luego complete y emita la boleta allí.
      </>
    ),
  },
  voteInPersonElectionDayTitle: {
    en: "Vote in person on Election Day",
    es: "Votar en persona el día de las elecciones",
  },
  voteInPersonElectionDayBody: {
    en: (
      <>
        Find your polling place the Department of State's{" "}
        <a href="https://google.com">online lookup tool</a>. Counties must
        finalize their polling place locations at least 20 days before the
        election. Pennsylvania does not offer same-day voter registration, so be
        sure to submit your voter registration before the deadline. ID is only
        required to vote in Pennsylvania if you are voting at a new polling
        place for the first time.
      </>
    ),
    es: (
      <>
        Encuentre su lugar de votación en la{" "}
        <a href="https://google.com">herramienta de búsqueda en línea</a> del
        Departamento de Estado. Los condados deben finalizar las ubicaciones de
        sus lugares de votación al menos 20 días antes de las elecciones.
        Pensilvania no ofrece el registro de votantes el mismo día, así que
        asegúrese de enviar su registro de votante antes de la fecha límite.
        Solo se requiere una identificación para votar en Pensilvania si es la
        primera vez que vota en un nuevo lugar de votación.
      </>
    ),
  },
  whatToExpectAtPollingPlaceTitle: {
    en: "What should I expect at the polling place?",
    es: "¿Qué debo esperar en el lugar de votación?",
  },
  whatToExpectAtPollingPlaceBody: {
    en: (
      <>
        When you arrive at your polling place, you see poll workers. Check in
        with them and follow their instructions. The voting systems used in PA
        are optical scan, DRE, and paper ballots. When voting, you will either
        hand mark a paper ballot or vote with a ballot marking device.
      </>
    ),
    es: (
      <>
        Cuando llega a su lugar de votación, ve a los trabajadores electorales.
        Registrarse con ellos y siga sus instrucciones. Los sistemas de votación
        utilizados en PA son escaneo óptico, DRE y boletas de papel. Al votar,
        usted podrá marcar a mano una boleta de papel o votar con un dispositivo
        para marcar boletas.
      </>
    ),
  },
  idRequirementsTitle: {
    en: "ID Requirements",
    es: "Requisitos de identificación",
  },
  idRequirementsBody: {
    en: (
      <>
        You will need to show ID for all of the following reasons:
        <ul>
          <li>You are voting at a new polling place for the first time</li>
          <li>You are voting for the first time in a federal election</li>
          <li>
            You registered by mail and did not provide identification at that
            time
          </li>
        </ul>
        Valid forms of ID include:
        <ul>
          <li>Pennsylvania driver’s license or PennDOT ID card</li>
          <li>ID issued by any Commonwealth agency</li>
          <li> ID issued by the U.S. Government</li>
          <li>U.S. passport</li>
          <li>U.S. Armed Forces ID</li>
          <li>Student ID</li>
          <li> Employee ID</li>
        </ul>
        If you do not have a photo ID, you can use a non-photo identification
        that includes your name and address:
        <ul>
          <li>Confirmation issued by the County Voter Registration Office</li>
          <li>Non-photo ID issued by the Commonwealth</li>
          <li>Non-photo ID issued by the U.S. Government</li>
          <li>Firearm permit</li>
          <li>Current utility bill</li>
          <li>Current bank statement</li>
          <li>Current paycheck</li>
          <li>Government check</li>
        </ul>
        If you do not have any of the above forms of ID, you can vote a
        provisional ballot. The county board of elections will decide whether
        you were eligible to vote within 7 days after the election. Voters can
        call or text 844-338-8743 at any time to reach VoteRiders Voter ID
        Helpline
      </>
    ),
    es: (
      <>
        Deberá mostrar una identificación por todas las siguientes razones:
        <ul>
          <li>Está votando en un nuevo lugar de votación por primera vez</li>
          <li>Está votando por primera vez en una elección federal</li>
          <li>
            Se registró por correo y no proporcionó identificación en ese
            momento
          </li>
        </ul>
        Las formas válidas de identificación incluyen:
        <ul>
          <li>
            Licencia de conducir de Pensilvania o tarjeta de identificación de
            PennDOT
          </li>
          <li>
            Identificación emitida por cualquier agencia de la Commonwealth
          </li>
          <li>Identificación emitida por el gobierno de los EE. UU.</li>
          <li>Pasaporte estadounidense</li>
          <li>Identificación de las Fuerzas Armadas de EE. UU.</li>
          <li>Identificación del Estudiante</li>
          <li>ID de empleado </li>
        </ul>
        Si no tiene una identificación con foto, puede usar una identificación
        sin foto que incluya su nombre y dirección:
        <ul>
          <li>
            Confirmación emitida por la Oficina de Registro de Votantes del
            Condado
          </li>
          <li>Identificación sin fotografía emitida por el Commonwealth</li>
          <li>
            Identificación sin foto emitida por el gobierno de los EE. UU.
          </li>
          <li>Permiso de armas de fuego</li>
          <li>Factura actual de servicios públicos</li>
          <li>Extracto bancario actual</li>
          <li>Cheque de pago actual</li>
          <li>Cheque del gobierno</li>
        </ul>
        Si no tiene ninguna de las formas de identificación anteriores, puede
        votar con una boleta provisional. La junta electoral del condado
        decidirá si usted es elegible para votar dentro de los 7 días
        posteriores a la elección. Los votantes pueden llamar o enviar un
        mensaje de texto al 844-338-8743 en cualquier momento para comunicarse
        con la línea de ayuda de identificación de votantes de VoteRiders
      </>
    ),
  },
  pollingPlaceHoursTitle: {
    en: "Polling Place Hours",
    es: "Horas de los lugares de votación",
  },
  pollingPlaceHoursBody: {
    en: "The polling places are open from 7:00 am to 8:00 pm.",
    es: "Los lugares de votación están abiertos de 7:00 am a 8:00 pm.",
  },
  canIVoteInPersonTitle: {
    en: "Can I vote in person if I requested an absentee ballot?",
    es: "¿Puedo votar en persona si solicité una boleta de voto en ausencia?",
  },
  canIVoteInPersonBody: {
    en: (
      <>
        <Typography fontStyle="bold">
          If you already submitted a mail-in or absentee ballot, you cannot vote
          at your polling place on election day.
        </Typography>
        If you did not submit your mail-in or absentee ballot, and you want to
        vote in person, you have two options:
        <ol>
          <li>
            Surrender your ballot: Bring your ballot and the pre-addressed outer
            return envelope to your polling place to be voided. Then, you can
            then vote a regular ballot.
          </li>
          <li>
            If you don't surrender your ballot and return envelope, you can vote
            by provisional ballot in-person at your polling place.
          </li>
        </ol>
      </>
    ),
    es: (
      <>
        <Typography fontStyle="bold">
          Si ya envió una boleta por correo o en ausencia, no puede votar en su
          lugar de votación el día de las elecciones.
        </Typography>
        Si no envió su boleta por correo o en ausencia y desea votar en persona,
        tiene dos opciones:
        <ol>
          <li>
            Entregue su boleta: Lleve su boleta y el sobre de devolución
            exterior con la dirección impresa a su lugar de votación para
            anularla. Luego, puede votar en una boleta regular.
          </li>
          <li>
            Si no entrega su boleta y devuelve el sobre, puede votar con una
            boleta provisional en persona en su lugar de votación.
          </li>
        </ol>
      </>
    ),
  },
  howToVoteByMailTitle: {
    en: "How can I vote by mail?",
    es: "¿Cómo puedo votar por correo?",
  },
  howToVoteByMailBody: {
    en: (
      <>
        <p>
          You can find{" "}
          <a href="https://www.vote411.org/pennsylvania#absentee-ballot-process">
            absentee ballot information here
          </a>
          , and{" "}
          <a href="https://www.vote411.org/pennsylvania#vote-by-mail">
            vote by mail information here
          </a>
          .
        </p>
        <p>
          You can request your mail ballot{" "}
          <a href="https://www.pavoterservices.pa.gov/OnlineAbsenteeApplication/#/OnlineAbsenteeBegin">
            online
          </a>
          , through a paper form (in{" "}
          <a href="https://www.vote.pa.gov/Register-to-Vote/Documents/PADOS_MailInApplication.pdf">
            English
          </a>{" "}
          or{" "}
          <a href="https://www.vote.pa.gov/Register-to-Vote/Documents/PADOS_MailInApplication_Spanish.pdf">
            Spanish
          </a>
          ), in person at your County Election office, or through a signed
          letter to your{" "}
          <a href="https://absentee.vote411.org/vote/eoddomestic.htm">
            county’s election office
          </a>
          .
        </p>
        <p>
          You can request an absentee ballot up to 7 days before an election.
          Ballots must be received by Election Day in order to be counted.
          Absentee ballots start being counted on Election Day.
        </p>
      </>
    ),
    es: (
      <>
        <p>
          Puede encontrar{" "}
          <a href="https://www.vote411.org/pennsylvania#absentee-ballot-process">
            información sobre la boleta de voto en ausencia aquí
          </a>
          , y{" "}
          <a href="https://www.vote411.org/pennsylvania#vote-by-mail">
            la información sobre el voto por correo aquí
          </a>
          .
        </p>
        <p>
          Puede solicitar su boleta por correo{" "}
          <a href="https://www.pavoterservices.pa.gov/OnlineAbsenteeApplication/#/OnlineAbsenteeBegin">
            en línea
          </a>
          , a través de un formulario impreso (en{" "}
          <a href="https://www.vote.pa.gov/Register-to-Vote/Documents/PADOS_MailInApplication.pdf">
            inglés
          </a>{" "}
          o{" "}
          <a href="https://www.vote.pa.gov/Register-to-Vote/Documents/PADOS_MailInApplication_Spanish.pdf">
            español
          </a>
          ), en persona en la oficina electoral de su condado o mediante una
          carta firmada{" "}
          <a href="https://absentee.vote411.org/vote/eoddomestic.htm">
            a la oficina electoral de su condado
          </a>
          .
        </p>
        <p>
          Puede solicitar una boleta de voto en ausencia hasta 7 días antes de
          una elección. Las boletas deben recibirse antes del día de las
          elecciones para ser contadas. Los votos en ausencia comienzan a
          contarse el día de las elecciones.
        </p>
      </>
    ),
  },
  ballotTrackingTitle: {
    en: "Ballot Tracking",
    es: "Seguimiento de boletas",
  },
  ballotTrackingBody: {
    en: (
      <>
        You can sign up to{" "}
        <a href="https://www.pavoterservices.pa.gov/pages/ballottracking.aspx">
          track your mail ballot
        </a>{" "}
        on the Pennsylvania Department of State{" "}
        <a href="https://www.electionreturns.pa.gov/">website</a>.
      </>
    ),
    es: (
      <>
        Puede registrarse para{" "}
        <a href="https://www.pavoterservices.pa.gov/pages/ballottracking.aspx">
          rastrear su boleta por correo
        </a>{" "}
        <a href="https://www.electionreturns.pa.gov/">en el sitio web</a>
        del Departamento de Estado de Pensilvania.
      </>
    ),
  },
  eligibility: {
    en: "Eligibility",
    es: "Elegibilidad",
  },
  eligibilityVotingBody: {
    en: "All registered voters are eligible to request to vote by mail.",
    es: "Todos los votantes registrados son elegibles para solicitar votar por correo.\n",
  },
  emergencyAbsenteeBallotsTitle: {
    en: "Emergency Absentee Ballots",
    es: "Papeletas de Emergencia para Votos Ausentes",
  },
  emergencyAbsenteeBallotsBody: {
    en: (
      <>
        Some Pennsylvania counties have ballot drop boxes. Bring your completed
        ballot to a ballot box, and insert it into the ballot box. When the
        polls close, poll workers will bring the ballots to the{" "}
        <a href="https://absentee.vote411.org/vote/eoddomestic.htm">
          county election office
        </a>
        , where they are then scanned and counted.
      </>
    ),
    es: (
      <>
        Algunos condados de Pensilvania tienen urnas electorales. Lleve su
        boleta completa a una urna e insértela en la urna. Cuando cierren las
        urnas, los trabajadores electorales llevarán las boletas a la{" "}
        <a href="https://absentee.vote411.org/vote/eoddomestic.htm">
          oficina electoral del condado
        </a>
        , donde luego se escanearán y contarán.
      </>
    ),
  },
  ballotDropBoxesTitle: {
    en: "Ballot drop boxes",
    es: "Urnas electorales",
  },
  ballotDropBoxesBody: {
    en: (
      <>
        <p>Some Pennsylvania counties have ballot drop boxes.</p>
        <p>
          Bring your completed ballot to a ballot box, and insert it into the
          ballot box. When the polls close, poll workers will bring the ballots
          to the{" "}
          <a href="https://absentee.vote411.org/vote/eoddomestic.htm">
            county election office
          </a>
          , where they are then scanned and counted.
        </p>
      </>
    ),
    es: (
      <>
        <p>Algunos condados de Pensilvania tienen urnas electorales.</p>
        <p>
          Lleve su boleta completa a una urna e insértela en la urna. Cuando
          cierren las urnas, los trabajadores electorales llevarán las boletas a{" "}
          <a href="https://absentee.vote411.org/vote/eoddomestic.htm">
            la oficina electoral del condado
          </a>
          , donde luego se escanearán y contarán.
        </p>
      </>
    ),
  },
  sampleBallotTitle: {
    en: "Sample ballot",
    es: "Boleta de muestra",
  },
  sampleBallotBody: {
    en: (
      <>
        View your sample ballot{" "}
        <a href="https://apps.alleghenycounty.us/website/ElectPollPlace.aspx">
          here
        </a>
        .
      </>
    ),
    es: (
      <>
        Vea su boleta de muestra{" "}
        <a href="https://apps.alleghenycounty.us/website/ElectPollPlace.aspx">
          aquí
        </a>
        .
      </>
    ),
  },
  provisionalVotingTitle: {
    en: "Provisional Voting",
    es: "Votación Provisional",
  },
  provisionalVotingBody: {
    en: (
      <>
        You may vote a provisional ballot if:
        <ul>
          <li>
            You try to vote in an election district and your name does not
            appear on the poll book and the elections officials cannot determine
            your registration.
          </li>
          <li>
            If you do not have an approved form of ID when you appear to vote
          </li>
          <li>The election official says you are not eligible to vote.</li>
        </ul>
        You are required to vote by provisional ballot if:
        <ul>
          <li>You're voting as a result of a Federal or State court order.</li>
          <li>
            You are voting as a result of an order extending the time
            established for closing the polls by state law that is in effect 10
            days before an election.
          </li>
        </ul>
        Provisional ballots are counted 7 days after Election Day. You can check
        the status of your provisional ballot using the information provided to
        you on the provisional ballot identification receipt, call
        1-877-VOTES-PA or visit the{" "}
        <a href="https://www.vote.pa.gov/Voting-in-PA/Pages/Voting-by-Provisional-Ballot.aspx">
          department of state
        </a>
        . Provide your provisional ballot identification number.
      </>
    ),
    es: (
      <>
        Puede votar con una boleta provisional si:
        <ul>
          <li>
            Intenta votar en un distrito electoral y su nombre no aparece en el
            libro de votación y los funcionarios electorales no pueden
            determinar su registro.
          </li>
          <li>
            Si no tiene una forma de identificación aprobada cuando se presenta
            a votar
          </li>
          <li>
            El funcionario electoral dice que usted no es elegible para votar.
          </li>
        </ul>
        Está obligado a votar con boleta provisional si:
        <ul>
          <li>
            Está votando como resultado de una orden judicial federal o estatal.
          </li>
          <li>
            Está votando como resultado de una orden que extiende el tiempo
            establecido para cerrar las urnas por ley estatal que está en vigor
            10 días antes de una elección.
          </li>
        </ul>
        Las boletas provisionales se cuentan 7 días después del día de las
        elecciones. Puede verificar el estado de su boleta provisional
        utilizando la información que se le proporcionó en el recibo de
        identificación de la boleta provisional, llame al 1-877-VOTES-PA o
        visite{" "}
        <a href="https://www.vote.pa.gov/Voting-in-PA/Pages/Voting-by-Provisional-Ballot.aspx">
          el departamento de estado
        </a>
        . Proporcione su número de identificación de boleta provisional.
      </>
    ),
  },
  provisionsForVotersWithDisabilitiesTitle: {
    en: "Provisions for Voters with Disabilities",
    es: "Disposiciones para votantes con discapacidades",
  },
  provisionsForVotersWithDisabilitiesBody: {
    en: (
      <>
        <p>
          Voters who need help voting due to blindness, disability, or inability
          to read or write can get assistance from a person of their choice.
        </p>
        Voters with disabilities and elderly voters assigned to an inaccessible
        polling place can request an Alternative Ballot. Alternative Ballots can
        be cast with the county board of elections by 8 p.m. on Election Day.
        You can request an Alternative Ballot is available by:
        <ul>
          <li>
            Contacting your{" "}
            <a href="https://absentee.vote411.org/vote/eoddomestic.htm">
              county board of elections
            </a>
          </li>
          <li>
            Downloading the{" "}
            <a href="https://www.vote.pa.gov/Voting-in-PA/Pages/Alternative-Ballot.aspx">
              Alternative Ballot Form
            </a>
          </li>
        </ul>
        <p>
          Applications for alternative ballots must be submitted to your County
          Board of Elections no later than 5pm on the Tuesday before Election
          Day.
        </p>
        <p>
          If you have questions or concerns, call the Disability Rights
          Pennsylvania at their intake line: 1.800.692.7443.
        </p>
      </>
    ),
    es: (
      <>
        <p>
          Los votantes que necesitan ayuda para votar debido a ceguera,
          discapacidad o incapacidad para leer o escribir pueden obtener
          asistencia de una persona de su elección.
        </p>
        Los votantes con discapacidades y los votantes mayores asignados a un
        lugar de votación inaccesible pueden solicitar una boleta alternativa.
        Las boletas alternativas se pueden emitir con la junta electoral del
        condado antes de las 8 p.m. el día de las elecciones. Puede solicitar
        que una boleta alternativa esté disponible a través de:
        <ul>
          <li>
            Ponerse en contacto con la{" "}
            <a href="https://absentee.vote411.org/vote/eoddomestic.htm">
              junta electoral de su condado
            </a>
          </li>
          <li>
            Cómo descargar el{" "}
            <a href="https://www.vote.pa.gov/Voting-in-PA/Pages/Alternative-Ballot.aspx">
              formulario de boleta alternativa
            </a>
          </li>
        </ul>
        <p>
          Las solicitudes de boletas alternativas deben enviarse a la Junta
          Electoral de su condado a más tardar a las 5:00 p. m. del martes
          anterior al día de las elecciones.
        </p>
        <p>
          Si tiene preguntas o inquietudes, llame a Disability Rights
          Pennsylvania a su línea de admisión: 1.800.692.7443.
        </p>
      </>
    ),
  },
  voterIntimidationTitle: {
    en: "Voter Intimidation and Discrimination",
    es: "Intimidación y discriminación de votantes",
  },
  voterIntimidationBody: {
    en: (
      <>
        <p>
          Anything that threatens, harasses, or intimidates voters outside the
          polling place, inside the polling place, at secure ballot receptacles,
          at mailboxes, or at county election offices is illegal. This includes
          any activity intended to, or having the effect of, interfering with
          any voter's right to vote.
        </p>
        <p>
          Voters should report instances of voter intimidation to their county
          board of elections and district attorney. Voters should also report
          them to the Department of State at 1-877-VOTESPA (1-877-868-3772).
        </p>
      </>
    ),
    es: (
      <>
        <p>
          Cualquier cosa que amenace, acose o intimide a los votantes fuera del
          lugar de votación, dentro del lugar de votación, en receptáculos de
          boletas seguros, en buzones de correo o en las oficinas electorales
          del condado es ilegal. Esto incluye cualquier actividad que pretenda o
          tenga el efecto de interferir con el derecho al voto de cualquier
          votante.
        </p>
        <p>
          Los votantes deben informar los casos de intimidación de votantes a la
          junta electoral de su condado y al fiscal de distrito. Los votantes
          también deben reportarlos al Departamento de Estado al 1-877-VOTESPA
          (1-877-868-3772).
        </p>
      </>
    ),
  },
  whereCanISeeElectionResultsTitle: {
    en: "Where can I see the results from the election?",
    es: "¿Dónde puedo ver los resultados de las elecciones?",
  },
  whereCanISeeElectionResultsBody: {
    en: (
      <>
        <p>
          See the updated Pennsylvania election results on Pennsylvania’s
          Department of State{" "}
          <a href="https://www.electionreturns.pa.gov/">website</a>. You can see
          previous election results{" "}
          <a href="https://www.alleghenycounty.us/elections/election-results.aspx">
            here
          </a>
          .
        </p>
        <p>
          Official results are unlikely to be available on Election Day.
          Election officials begin counting absentee ballots on Election Day.
          Provisional ballots are counted a week after the election.
        </p>
      </>
    ),
    es: (
      <>
        <p>
          Vea los resultados electorales actualizados de Pensilvania en el{" "}
          <a href="https://www.electionreturns.pa.gov/">sitio web</a>. del
          Departamento de Estado de Pensilvania. Puede ver los resultados de las
          elecciones anteriores{" "}
          <a href="https://www.alleghenycounty.us/elections/election-results.aspx">
            aquí
          </a>
          .
        </p>
        <p>
          Es poco probable que los resultados oficiales estén disponibles el día
          de las elecciones. Los funcionarios electorales comienzan a contar las
          boletas en ausencia el día de las elecciones. Las boletas
          provisionales se cuentan una semana después de la elección.
        </p>
      </>
    ),
  },
  sources: {
    en: "Sources",
    es: "Fuentes de información",
  },
};
