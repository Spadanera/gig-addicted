import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller);

let userLang = navigator.language || navigator.userLanguage;

if (userLang) {
    userLang = userLang.split("-")[0];
}

export default new MLCreate({
    initial: userLang || 'en',
    save: true, // process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('en').create({
            it: "Italian",
            en: "English",
            login: "Log In",
            logout: "Log out",
            register: "Register",
            home: "Home",
            bands: "Bands",
            events: "Events",
            about: "About",
            myBands: "My Bands",
            generalInfo: "General Info",
            setlists: "Setlists",
            search: "search",
            joinBand: "Join the band",
            open: "Open",
            delete: "Delete",
            areYouSure: "Are you sure?",
            allBandDeleted: "Band with all setlists and events will be deleted",
            bandDeleted: "Band successfully deleted",
            bandMembers: "Band Members",
            genres: "Genres",
            nothingIsPublic: "Nothing is public",
            public: "Public",
            membersPublic: "Members public",
            setlistsPublic: "Setlists public",
            eventSetlist: "Event Setlist",
            playSetlist: "Play Setlist",
            visibility: "Visibility",
            name: "Name",
            bandLogo: "Band Logo",
            fileInput: "File Input",
            cover: "Cover",
            tribute: "Tribute",
            original: "Original",
            type: "Type",
            tributeArtist: "Tribute Artist",
            description: "Description",
            enterLocation: "Enter a location",
            noResult: "No result",
            save: "Save",
            dismiss: "Dismiss",
            close: "Close",
            allMembersRemoved: "Band Member will be removed from the band",
            admin: "Admin",
            editInfo: "Edit Info",
            editSetlists: "Edit Setlists",
            editEvents: "Edit Events",
            editMembers: "Edit Members",
            noBand: "No Band",
            needToCreateBand: "You have to create a Band",
            createBand: "Create Band",
            bandCreated: "Band successfully created",
            rename: "Rename",
            copy: "Copy",
            edit: "Edit",
            newSetlist: "New Setlist",
            newSong: "New Song",
            editSetlist: "Edit Setlist",
            title: "Title",
            confirmed: "Confirmed",
            pending: "Pending",
            removed: "Removed",
            setlistWillDeleted: "Setlist will be deleted",
            editBandMembers: "Edit Band Members",
            gmailAddress: "Gmail Address",
            role: "Role",
            send: "Send",
            errorInvitation: "Error executing invitation",
            memberExists: "Member already exists",
            confirm: "Confirm",
            info: "Info",
            setlist: "Setlist",
            cancel: "Cancel",
            ok: "OK",
            noEvent: "No Event",
            createEvent: "Create Event",
            pastEvents: "Past Events",
            eventDate: "Event Date",
            eventTime: "Event Time",
            locationName: "Location Name",
            eventPoster: "Event Poster",
            eventPublic: "Event Public",
            setlistPublic: "Setlist Public",
            eventDeleted: "Event deleted",
            eventWillRemoved: "Event will be removed from the list",
            author: "Author",
            time: "Time",
            seconds: "seconds",
            status: "Status",
            addSong: "Add Song",
            editSong: "Edit Song",
            type3Char: "Type 3 characters to query",
            preview: "Preview",
            loadSetlist: "LOAD SETLIST",
            locationAddress: "Location address",
            publicVisibility: "Public Visibility",
            lyrics: "Lyrics",
            startLive: "Start Live",
            missingTime: "Missing time",
            startMetronome: "Start Metronome",
            stopMetronome: "Stop Metronome",
        }),
        new MLanguage('it').create({
            it: "Italiano",
            en: "Inglese",
            login: "Accedi",
            logout: "Esci",
            register: "Registrati",
            home: "Home",
            bands: "Elenco Band",
            events: "Eventi",
            about: "About",
            myBands: "Mie Band",
            generalInfo: "Info Generali",
            setlists: "Scalette",
            search: "cerca",
            joinBand: "Unisciti alla band",
            open: "Apri",
            delete: "Elimina",
            areYouSure: "Sei sicuro?",
            allBandDeleted: "La band con tutte le scalette e gli eventi verrà eliminata",
            bandDeleted: "Band eliminata con successo",
            bandMembers: "Componenti della band",
            genres: "Generi",
            nothingIsPublic: "Nulla è pubblico",
            public: "Pubblico",
            membersPublic: "Componenti pubblici",
            setlistsPublic: "Scaletta pubblica",
            eventSetlist: "Evento pubblico",
            playSetlist: "Riproduci Scaletta",
            visibility: "Visibilità",
            name: "Nome",
            bandLogo: "Logo della Band",
            fileInput: "Carica file",
            cover: "Cover",
            tribute: "Tributo",
            original: "Originale",
            type: "Tipo",
            tributeArtist: "Artista Tributo",
            description: "Descrizione",
            enterLocation: "Inserisci un indirizzo",
            noResult: "Nessun risultato",
            save: "Salve",
            dismiss: "Annulla",
            close: "Chudi",
            allMembersRemoved: "Il componente della band verrà rimosso",
            admin: "Amministratore",
            editInfo: "Modifica Info",
            editSetlists: "Modifica Scalette",
            editEvents: "Modifica Eventi",
            editMembers: "Modifica Componenti",
            noBand: "Nessuna Band",
            needToCreateBand: "E' necessario creare la tua prima Band",
            createBand: "Crea Band",
            bandCreated: "Band creata con successo",
            rename: "Rinomina",
            copy: "Copia",
            edit: "Modifica",
            newSetlist: "Nuova Scaletta",
            newSong: "Nuovo Brano",
            editSetlist: "Modifica Scaletta",
            title: "Titolo",
            confirmed: "Confermato",
            pending: "In sospeso",
            removed: "Rimosso",
            setlistWillDeleted: "La scaletta verrà eliminata",
            editBandMembers: "Modifica componenti della Band",
            gmailAddress: "Indirizzo Gmail",
            role: "Ruolo",
            send: "Invia",
            errorInvitation: "Errore nell'esecuzione dell'invito",
            memberExists: "Il componente esiste già",
            confirm: "COnferma",
            info: "Info",
            setlist: "Scaletta",
            cancel: "Annulla",
            ok: "OK",
            noEvent: "Nessun evento",
            createEvent: "Crea Evento",
            pastEvents: "Eventi passati",
            eventDate: "Data dell'evento",
            eventTime: "Orario dell'evento",
            locationName: "Nome della location",
            eventPoster: "Locandina",
            eventPublic: "Evento pubblico",
            setlistPublic: "Scaletta pubblica",
            eventDeleted: "Evento eliminato",
            eventWillRemoved: "L'evento verrà eliminato",
            author: "Autore",
            time: "Durata",
            seconds: "secondi",
            status: "Status",
            addSong: "Aggiungi brano",
            editSong: "Modifica brano",
            type3Char: "Inserisci 3 lettere per ricercare",
            preview: "Anteprima",
            loadSetlist: "CARICA SCALETTA",
            locationAddress: "Indirizzo della location",
            publicVisibility: "Visibilità pubblica",
            lyrics: "Testo",
            startLive: "Inizia Live",
            missingTime: "Tempo rimanente",
            startMetronome: "Avvia Metronomo",
            stopMetronome: "Ferma Metronomo",
        }),
    ]
})