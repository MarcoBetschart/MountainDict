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
### 3.1 Technologien
Das Projekt wurde als MEVN Applikation aufgebaut. MEVN ist eines der am häufig eingesetzten JavaScript-Stacks. Als Stack wird ein Reihe von Frameworks und Tools
bezeichnet, die zusammen eingesetzt werden können, um eine Softwareanwendung aufzubauen. 
MEVN steht für:
**M**ongoDB, **E**xpress.js, **V**ue.js, **N**ode.js

**MongoDB**: Ein dokumentorientiertes NoSQL-Datenbankmanagementsystem. 

**Express.js**: Ein Webapplikationsframework für Node.js.

**Vue.js**: Ein Clientseitiges JavaScript-Framework zum Aufbau von Webapplikationen.

**Node.js**: Eine Umgebung zum Ausführen von JavaScript.

Im Frontend ist die Benutzeroberfläche mit Vue.js aufgebaut. Durch den Einsatz von Vue.js kann der Inhalt dynamisch geladen werden. Um diese Daten laden zu können, 
gibt es im Application Server eine REST-API. Die Aufrufe der API werden im Frontend durchgeführt. Dadurch können die Daten aus der MongoDB geladen werden.

**Design Pattern**
Das Projekt wurde so weit es geht mit MVC (Mode-View-Controller). Jedoch findet man in Webapplikationen häufig auch auf der View Logik, die jedoch nicht aus dem Frontend trennbar ist.

Model: Die Models sind im Ordner Models abgelegt. Für dieses Projekt gibt es die Models MountainItem und User. 
View: Die Views sind alle Vue.js Dateien. Darin sind alle Benutzeroberflächen implementiert.
Controller: Die Controller sind die Router-Dateien, mit denen man durch die REST API die Daten aus der MongoDB laden kann.

### 3.1	Komponentendiagramm

## 4. User Interface Design
Bei den ersten Überlegungen für das User Interface war für mich bereits klar, das GUI soll sowohl für normale Bildschirme, als auch für mobile Geräte optimiert sein. Daher habe ich mich für Bootstrap entschieden. Bootstrap bietet eine vielzahl von CSS-Klassen, die für Responsive-Design optimiert sind.
Bei der Nutzung von Mobilgeräten ist der Einsatz von Links/Buttons problematisch, da diese vielfach schwer zu treffen sind. Durch die Optimierung für solche Geräte wurde bei diesem Projekt möglichst vermieden, diese einzusetzen. Beispiel: Die Suche wird immer sofort aktualisiert, ohne einen Klick auf einen Button.
Um die Benutzung der App zu vereinfachen, habe ich mich für eine Komonente entschieden, die dem Benutzer Rückmeldungen mithilfe von Message-Boxen gibt. So können dem Benutzer jederzeit Informationen oder Fehler mitgeteilt werden.

**Zielgruppe**
Die Zielgruppe für diese Webapplikation ist sehr gross. Das MountainDict zielt auf alle Natur- und Berglieberhaber, die gerne Informationen zu einem Berg wollen. 
Aus diesem Grund ist die Optimierung sowohl von grossen als auch von kleinen Bildschirmen von nötig. So können Junge und ältere Menschen angesprochen werden.

## 5. Projektvorgehen
**Emphasize**
Um mein Projekt optimal anzugehen, habe ich mir gleich zu Beginn Gedanken gemacht, wie mein GUI dargestellt werden soll (Kapitel 4).

**Define, Ideate, Prototype**
Da ich die eingesetzte Technologie Vue.js kaum kannte, entschied ich mich, die gelernten Phasen Define, Ideate und Prototype zusammenzuführen. So konnte ich laufend neue Ideen in meine Prototyp-Seiten einbauen. So konnte ich Zeit sparen und mich auf das wesentliche, das Designm, konzentrieren.

**Test**
Um meine Arbeit so effizient wie möglich zu gestalten, habe ich jeweils nach dem erstellen einer Seite der Webapplikation einen gründlichen Test durchgeführt. Damit konnte ich Fehler frühzeitig erkennen und beheben. So sparte ich gegenüber einer Testphase am Ende viel Zeit, da ich mich nicht immer in die jeweiligen Detail-Seiten einarbeiten musste. 