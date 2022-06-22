# MountainDict
## 1. Projekbeschreibung
### 1.1 Ausgangslage
Im Fach BM_P4 gibt es für die studierenden die Aufgabe, ein Projekt über die gelernten Inhalte zu erstellen. 
Ziel ist es, eine grafische Benutzeroberfläche nach ergonomischen Grundsätzen zu gestalten. Dabei sind die Studierenden frei, welche Techniken sie einsetzen.
### 1.2	Projektidee
Das Projekt soll dem Benutzer ein Verzeichnis von Bergen bieten. Dabei hat dieser die Möglichkeit, Berge zu suchen, erfassen und bewerten. Funktionen, die eine Erfassung oder Bearbeitung eines Da-tensatzes erfordern, können nur von angemeldeten Benutzern ausgeführt werden. Es soll damit ein Lexikon für Berge entstehen. Daraus entsteht der Titel des Projekts «Mountaindict» (englisch für Berg-verzeichnis, dict entspricht der Abkürzung für dictionary (Lexikon))

## 2. User Stories
Folgende User Stories wurden für das Projekt definiert:
- Als Benutzer möchte ich Berge suchen können, um einen Berg zu finden.
- Als Benutzer möchte ich mich anmelden können, um die zusätzlichen Funktionen ausführen zu können.
- Als Benutzer möchte ich mich registrieren können, um die zusätzlichen Funktionen
- Als angemeldeter Benutzer möchte ich einen neuen Berg erfassen können, um das Bergverzeichnis zu vervollständigen.
- Als angemeldeter Benutzer möchte ich die Details eines Berges sehen können, um mich über einen Berggipfel zu informieren.
- Als angemeldeter Benutzer möchte ich eine Bewertung und ein Kommentar erfassen können, um meine Meinung mit den anderen Benutzern zu teilen.
- Als angemeldeter Benutzer möchte ich mich ausloggen können, damit nur ich Daten mit meinem Nutzer erfassen kann.

## 3. Aufbau der Lösung
Das Projekt wurde als MEVN Applikation aufgebaut. MEVN ist eines der am häufig eingesetzten JavaScript-Stacks. Als Stack wird ein Reihe von Frameworks und Tools
bezeichnet, die zusammen eingesetzt werden können, um eine Softwareanwendung aufzubauen. 
MEVN steht für:
**M**ongoDB, **E**xpress.js, **V**ue.js, **N**ode.js

**MongoDB**: Ein dokumentorientiertes NoSQL-Datenbankmanagementsystem. 

**Express.js**: Ein Webapplikationsframework für Node.js.

**Vue.js**: Ein Clientseitiges JavaScript-Framework zum Aufbau von Webapplikationen. Es 

**Node.js**: Eine Umgebung zum Ausführen von JavaScript.

Im Frontend ist die Benutzeroberfläche mit Vue.js aufgebaut. Durch den Einsatz von Vue.js kann der Inhalt dynamisch geladen werden. Um diese Daten laden zu können, 
gibt es im Application Server eine REST-API. Die Aufrufe der API werden im Frontend durchgeführt. Dadurch können die Daten aus der MongoDB geladen werden.

### 3.1	Komponentendiagramm

## 4.	User Interface Design


## 5.	Projektvorgehen
