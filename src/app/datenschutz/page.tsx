import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-accent-100 pt-20">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-950 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary-950 mb-4">Datenschutzerklärung</h1>
          <div className="w-24 h-1 bg-primary-500"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">

            {/* Introduction */}
            <div className="text-primary-800 space-y-4">
              <p>Wir freuen uns über Ihr Interesse an unserem Internetauftritt. Ihre Privatsphäre ist für uns sehr wichtig. Im Folgenden geben wir Ihnen einen einfachen Überblick über den Umgang mit Ihren personenbezogenen Daten, wenn Sie unseren Internetauftritt nutzen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können, wie z.B. Ihr Name, Ihre E-Mail-Adresse oder Ihre IP-Adresse.</p>
            </div>

            {/* Allgemeine Hinweise */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Allgemeine Hinweise</h2>
              <div className="space-y-2 text-primary-800">
                <p>Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie unseren Internetauftritt nutzen, werden personenbezogene Daten, mit denen Sie persönlich identifiziert werden können, erhoben. Diese Datenschutzerklärung beschreibt Ihnen, welche Daten wir erheben und zu welchem Zweck wir sie nutzen. Wir weisen darauf hin, dass die Datenübertragung im Internet – z.B. bei der Kommunikation per E-Mail – Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
              </div>
            </section>

            {/* Name und Kontakt des Verantwortlichen */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Name und Kontakt des Verantwortlichen gemäß Artikel 4 Abs. 7 DSGVO</h2>
              <div className="space-y-2 text-primary-800">
                <p>RP&MG Consulting GmbH & Co. KG, Lindenstraße 14, 50674 Köln</p>
                <p>Telefon: 0221 - 92428030</p>
                <p>E-Mail: <a href="mailto:info@rpmg.de" className="text-primary-500 hover:text-primary-950 hover:underline">info@rpmg.de</a></p>
              </div>
            </section>

            {/* Ihr Recht auf Auskunft, Sperrung und Löschung */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Ihr Recht auf Auskunft, Sperrung und Löschung</h2>
              <div className="space-y-2 text-primary-800">
                <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
              </div>
            </section>

            {/* Widerruf Ihrer Einwilligung */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
              <div className="space-y-2 text-primary-800">
                <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
              </div>
            </section>

            {/* Recht auf Datenübertragbarkeit */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Recht auf Datenübertragbarkeit</h2>
              <div className="space-y-2 text-primary-800">
                <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
              </div>
            </section>

            {/* Beschwerderecht */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
              <div className="space-y-2 text-primary-800">
                <p>Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte von Nordrhein-Westfalen. Die Kontaktdaten des Landesdatenschutzbeauftragten von Nordrhein-Westfalen finden Sie unter folgendem Link: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" className="text-primary-500 hover:text-primary-950 hover:underline" target="_blank" rel="noopener noreferrer">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>
              </div>
            </section>

            {/* Widerspruch gegen Werbemails */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Widerspruch gegen Werbemails</h2>
              <div className="space-y-2 text-primary-800">
                <p>Wir widersprechen hiermit ausdrücklich der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien. Wir behalten uns ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
              </div>
            </section>

            {/* SSL/TLS-Verschlüsselung */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Einsatz von SSL- bzw. TLS-Verschlüsselung</h2>
              <div className="space-y-2 text-primary-800">
                <p>Unser Internetauftritt nutzt zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie über unser Kontaktformular an uns senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an dem Schloss-Symbol in Ihrer Browserzeile und daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
              </div>
            </section>

            {/* Verwendung von Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Verwendung von Cookies</h2>
              <div className="space-y-2 text-primary-800">
                <p>Um die Nutzung unseres Internetauftritts für Sie ansprechend zu gestalten und bestimmte Funktionen zu ermöglichen, verwenden wir sogenannte Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Einige der von uns verwendeten Cookies sind sogenannte Session-Cookies. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen. Bei der Nichtannahme von Cookies kann die Funktionalität unseres Internetauftritts eingeschränkt sein. Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Wir haben ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung unserer Dienste. Soweit andere Cookies – z.B. Cookies zur Analyse Ihres Nutzerverhaltens – gespeichert werden, werden diese gesondert erklärt.</p>
              </div>
            </section>

            {/* Server-Logfiles */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Speicherung von Zugriffsdaten in Server-Logfiles</h2>
              <div className="space-y-2 text-primary-800">
                <p>Sie können unseren Internetauftritt nutzen, ohne Angaben zu Ihrer Person zu machen. In unserem Auftrag werden lediglich Zugriffsdaten in sogenannten Server-Logfiles gespeichert, die Ihr Browser automatisch an uns übermittelt. Dies sind z.B. Browsertyp und Browserversion, Betriebssystem, Referrer URL, Namen der angeforderten Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, den anfragenden Provider sowie Ihre IP-Adresse. Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs unseres Internetauftritts und zur Verbesserung unseres Angebots ausgewertet und erlauben uns keinen Rückschluss auf Ihre Person. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>
              </div>
            </section>

            {/* Datenweitergabe in die USA */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Hinweis zur Datenweitergabe in die USA</h2>
              <div className="space-y-2 text-primary-800">
                <p>In unserem Internetauftritt sind unter anderem Tools von Unternehmen mit Sitz in den USA eingebunden. Wenn diese Tools aktiv sind, können Ihre personenbezogenen Daten an die US-Server der jeweiligen Unternehmen weitergegeben werden. Wir weisen darauf hin, dass die USA kein sicherer Drittstaat im Sinne des EU-Datenschutzrechts sind. US-Unternehmen sind dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass US-Behörden (z.B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese Verarbeitungstätigkeiten keinen Einfluss.</p>
              </div>
            </section>

            {/* Kontaktformular */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Nutzung unseres Kontaktformulars</h2>
              <div className="space-y-2 text-primary-800">
                <p>Bei der Nutzung unseres Kontaktformulars erheben wir personenbezogene Daten nur in dem von Ihnen zur Verfügung gestellten Umfang. Ihre übermittelten Kontaktdaten, wie z.B. Ihre E-Mail-Adresse, nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden durch uns selbstverständlich nicht an Dritte weitergegeben. Die Verarbeitung dieser Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt, z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
              </div>
            </section>

            {/* Google Analytics */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Einsatz von Google Analytics zur Webanalyse</h2>
              <div className="space-y-2 text-primary-800">
                <p>Unser Internetauftritt nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                <p>Google Analytics verwendet Cookies, kleine Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse Ihrer Nutzung unseres Internetauftritts ermöglichen. Die durch das Cookie gesammelten Informationen über Ihr Nutzerverhalten werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Die Speicherung von Google-Analytics-Cookies erfolgt nur nach einer entsprechenden Einwilligung von Ihnen auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Ihre Einwilligung ist jederzeit widerrufbar.</p>
                <p>Wir haben in unserem Internetauftritt die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. In unserem Auftrag wird Google diese Informationen benutzen, um Ihre Nutzung unseres Internetauftritts auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p>
                <p>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browsersoftware verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen unseres Internetauftritts vollumfänglich nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie gesammelten und auf Ihre Nutzung unseres Internetauftritts bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-primary-500 hover:text-primary-950 hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>.</p>
                <p>Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <a href="https://support.google.com/analytics/answer/6004245?hl=de" className="text-primary-500 hover:text-primary-950 hover:underline" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p>
                <p>Wir haben mit Google einen Vertrag zur Auftragsdatenverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.</p>
                <p>Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit Cookies, Nutzerkennungen (z.B. User ID) oder Werbe-IDs (z.B. DoubleClick-Cookies, Android-Werbe-ID) verknüpft sind, werden nach 26 Monaten anonymisiert bzw. gelöscht. Details hierzu finden Sie unter folgendem Link: <a href="https://support.google.com/analytics/answer/7667196?hl=de" className="text-primary-500 hover:text-primary-950 hover:underline" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/7667196?hl=de</a></p>
              </div>
            </section>

            {/* Google Maps */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Einsatz von Google Maps</h2>
              <div className="space-y-2 text-primary-800">
                <p>Unser Internetauftritt nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir haben keinen Einfluss auf diese Datenübertragung. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unseres Internetauftritts und an einer leichten Auffindbarkeit der von uns auf diesem Internetauftritt angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://www.google.de/intl/de/policies/privacy/" className="text-primary-500 hover:text-primary-950 hover:underline" target="_blank" rel="noopener noreferrer">https://www.google.de/intl/de/policies/privacy/</a>.</p>
              </div>
            </section>

            {/* Einbindung Dritter */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Einbindung von Diensten und Inhalten Dritter</h2>
              <div className="space-y-2 text-primary-800">
                <p>Unser Internetauftritt nutzt CSS-Dateien, Java-Scripte und Schriftarten Dritter, die über den Server unseres Dienstleisters der e-nitio mediasign GmbH & Co. KG, Melatengürtel 125a, 50825 Köln, Deutschland, für unseren Internetauftritt bereitgestellt werden. Durch die Auslagerung dieser Daten auf einen anderen Server kann Ihr Browser diese Daten parallel herunterladen und damit die Seiten unseres Internetauftritts schneller ausliefern, was ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO darstellt. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zum Server von e-nitio aufnehmen. Hierdurch erlangt e-nitio Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. In unserem Auftrag werden von e-nitio lediglich Zugriffsdaten in sogenannten Server-Logfiles gespeichert, die Ihr Browser automatisch an den Server von e-nitio übermittelt. Dies sind z.B. Browsertyp und Browserversion, Betriebssystem, Referrer URL, Namen der angeforderten Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, den anfragenden Provider sowie Ihre IP-Adresse. Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs unseres Internetauftritts ausgewertet und erlauben keinen Rückschluss auf Ihre Person. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
              </div>
            </section>

            {/* Änderungsvorbehalt */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Änderungsvorbehalt der Datenschutzerklärung</h2>
              <div className="space-y-2 text-primary-800">
                <p>Wir behalten uns vor, die vorgenannten Hinweise zum Datenschutz jederzeit unter Beachtung der datenschutzrechtlichen Vorgaben zu ändern, um sie an die geänderte Rechtslage, oder bei Änderungen des Dienstes sowie der Datenverarbeitung anzupassen. Dies gilt jedoch nur im Hinblick auf die Erklärungen zur Datenverarbeitung. Sofern Einwilligungen für die Änderungen von Ihnen erforderlich sind oder Bestandteile der Datenschutzerklärung Regelungen des Vertragsverhältnisses mit Ihnen enthalten, erfolgen die Änderungen nur mit Ihrer Zustimmung.</p>
                <p className="mt-4 font-semibold">Stand: 24.07.2020</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
