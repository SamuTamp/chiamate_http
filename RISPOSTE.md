# Risposte

## Passo 6 - Richieste HTTP

| Pulsante | Metodo | URL | Stato osservato |
| --- | --- | --- | --- |
| Carica un post (1) | GET | `.../posts/1` | 200 |
| Carica un post (999) | GET | `.../posts/999` | 404 |
| Carica tutti | GET | `.../posts` | 200 |
| Invia un post | POST | `.../posts` | 201 |

La risposta della POST contiene `id: 101`. JSONPlaceholder simula la creazione, ma non salva il post.

## Domande

1. `provideHttpClient()` configura `HttpClient` nei provider dell'app. In questo progetto si trova in `src/app/app.config.ts`.

2. Con l'iniezione nel costruttore Angular passa la dipendenza come parametro; con `inject(HttpClient)` la si assegna direttamente in un inizializzatore di campo. Entrambe funzionano in una classe Angular gestita dalla dependency injection. Angular usa `@Injectable()`, non `@Service()`.

3. Un `Observable` rappresenta una sequenza di valori asincroni. Le richieste HTTP di Angular sono lazy e partono quando si chiama `subscribe()`.

4. `next` riceve la risposta quando la richiesta riesce; `error` gestisce il fallimento. Con il post 999 viene chiamato `error` e lo stato è 404.

5. I signal notificano Angular quando il valore cambia, così la vista si aggiorna. Una proprietà normale può ricevere il dato, ma non garantisce l'aggiornamento della vista.

6. Le interfacce forniscono controlli e suggerimenti sui campi. Per esempio, `p.titolo` dà un errore di compilazione perché `Post` definisce `title`.

7. Il pipe `json` trasforma un oggetto in testo JSON indentato. È utile per ispezionare rapidamente la risposta del server durante lo sviluppo.

8. JSONPlaceholder simula la creazione e restituisce sempre l'id 101 perché non salva i dati. `HttpClient` converte automaticamente l'oggetto in JSON e imposta il tipo di contenuto: non serve `JSON.stringify()`.

9. I file `environment.ts` e `environment.development.ts` sono esclusi dal repository tramite `.gitignore`. `environment.example.ts` contiene la struttura senza la chiave reale e serve come modello da copiare quando si clona il progetto.

10. La chiave inclusa nel codice Angular viene scaricata nel browser e può essere letta dagli utenti: non è segreta. Una chiave importante va conservata sul server e usata da un backend.