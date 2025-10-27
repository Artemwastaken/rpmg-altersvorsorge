import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Impressum() {
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
          <h1 className="text-4xl font-bold text-primary-950 mb-4">Impressum</h1>
          <div className="w-24 h-1 bg-primary-500"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">

            {/* Company Information */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-950 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2 text-primary-800">
                <p className="font-semibold">RP&MG Consulting GmbH und Co. KG</p>
                <p>Lindenstraße 14 | 50674 Köln</p>
                <p>Telefon: 0221 / 92 42 80 30</p>
                <p>E-Mail: <a href="mailto:info@rpmg.de" className="text-primary-500 hover:text-primary-950">info@rpmg.de</a></p>
                <p>Internet: <a href="https://www.rpmg.de" className="text-primary-500 hover:text-primary-950" target="_blank" rel="noopener noreferrer">www.rpmg.de</a></p>
              </div>
            </section>

            {/* Registration Information */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Handelsregister</h2>
              <div className="space-y-2 text-primary-800">
                <p>Amtsgericht Köln HRA 30760</p>
                <p>USt.-IdNr. DE299980936</p>
              </div>
            </section>

            {/* Management */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Gesellschaftsstruktur</h2>
              <div className="space-y-4 text-primary-800">
                <div>
                  <p className="font-semibold">Persönlich haftende Gesellschafterin</p>
                  <p>RP&MG Consulting Verwaltungs GmbH</p>
                  <p>Amtsgericht Köln HRB 82472</p>
                </div>
                <div>
                  <p className="font-semibold">Geschäftsführer</p>
                  <p>Robert Piccini, Marvin Gorkow</p>
                </div>
                <div>
                  <p>V.i.S.d. § 55 Abs. 2 RStV: Marvin Gorkow</p>
                </div>
              </div>
            </section>

            {/* Complaint Offices */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Beschwerdestellen - außergerichtliche Streitbeilegung</h2>
              <div className="space-y-2 text-primary-800">
                <p>Versicherungsombudsmann e.V. | Postfach 08 06 32 | 10006 Berlin</p>
                <p>Ombudsmann für die private Kranken- und Pflegeversicherung | Postfach 06 02 22 | 10052 Berlin</p>
                <p>Ombudsmann der privaten Bausparkassen | Postfach 303079 | 10730 Berlin</p>
              </div>
            </section>

            {/* Intermediary Status */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Vermittlerstatus</h2>
              <div className="space-y-2 text-primary-800">
                <p>Finanzanlagenvermittler mit Erlaubnis nach §34 f Abs. 1 GewO.</p>
                <p>Versicherungsmakler mit Erlaubnis nach §34d Abs. 1 GewO.</p>
              </div>
            </section>

            {/* Authorities */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Zuständige Behörden</h2>
              <div className="space-y-4 text-primary-800">
                <div>
                  <p className="font-semibold">Behörde für die Erlaubnis nach §34 c GewO</p>
                  <p>Stadt Köln, Amt für öffentliche Ordnung und Gewerbeangelegenheiten</p>
                  <p>Willy-Brand-Platz 3, 50673 Köln</p>
                </div>
                <div>
                  <p className="font-semibold">Behörde für die Erlaubnis nach §34 d Abs. 1 GewO</p>
                  <p>Industrie- und Handelskammer zu Köln</p>
                  <p>Unter Sachsenhausen 10-26 | 50677 Köln</p>
                  <p>Telefon: 0221/1640-0 | Telefax: 0221/1640-129</p>
                  <p>E-Mail: <a href="mailto:service@koeln.ihk.de" className="text-primary-500 hover:text-primary-950">service@koeln.ihk.de</a></p>
                  <p>Internet: <a href="https://www.ihk-koeln.de" className="text-primary-500 hover:text-primary-950" target="_blank" rel="noopener noreferrer">www.ihk-koeln.de</a></p>
                </div>
                <div>
                  <p className="font-semibold">Behörde für die Erlaubnis nach §34 f Abs. 1 GewO</p>
                  <p>Industrie- und Handelskammer zu Köln</p>
                  <p>Unter Sachsenhausen 10-26 | 50677 Köln</p>
                  <p>Telefon: 0221/1640-0 | Telefax: 0221/1640-129</p>
                  <p>E-Mail: <a href="mailto:service@koeln.ihk.de" className="text-primary-500 hover:text-primary-950">service@koeln.ihk.de</a></p>
                  <p>Internet: <a href="https://www.ihk-koeln.de" className="text-primary-500 hover:text-primary-950" target="_blank" rel="noopener noreferrer">www.ihk-koeln.de</a></p>
                </div>
              </div>
            </section>

            {/* Registry */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Gemeinsame Registerstelle</h2>
              <div className="space-y-2 text-primary-800">
                <p>Deutscher Industrie- und Handelskammertag (DIHK) e.V.</p>
                <p>Breite Straße 29 | 10178 Berlin</p>
                <p>Telefon: 030 / 20308-0 | Telefax: 030 / 20308-1000</p>
                <p>E-Mail: <a href="mailto:info@dihk.de" className="text-primary-500 hover:text-primary-950">info@dihk.de</a></p>
                <p>Internet: <a href="https://www.dihk.de" className="text-primary-500 hover:text-primary-950" target="_blank" rel="noopener noreferrer">www.dihk.de</a></p>
              </div>
            </section>

            {/* Intermediary Register */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Vermittlerregister</h2>
              <div className="space-y-2 text-primary-800">
                <p>Einsehbar unter <a href="https://www.vermittlerregister.info" className="text-primary-500 hover:text-primary-950" target="_blank" rel="noopener noreferrer">www.vermittlerregister.info</a></p>
                <p>Versicherungsmakler mit Erlaubnis nach §34d Abs. 1 GewO.</p>
                <p>Registrierungsnummer: D-1HPJ-7HTEL-61</p>
                <p>Finanzanlagenvermittler mit Erlaubnis nach §34 f Abs. 1 GewO</p>
                <p>Registrierungsnummer: D-F-142-4Y11-34</p>
              </div>
            </section>

            {/* Issuers */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Emitenten</h2>
              <div className="text-primary-800">
                <p>Die Erlaubnis umfasst die Finanzanlagenvermittlung von Anteilen oder Aktien an inländischen offenen Investmentvermögen, offenen EU-Investmentvermögen oder ausländischen offenen Investmentvermögen, die nach dem Kapitalanlagegesetzbuch vertrieben werden dürfen (§ 34f Abs. 1 Nr. 1 GewO).</p>
              </div>
            </section>

            {/* Participation */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Beteiligung</h2>
              <div className="text-primary-800">
                <p>Es bestehen keinerlei Beteiligungen an oder von Versicherungsunternehmen.</p>
              </div>
            </section>

            {/* Sustainability */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Verordnung (EU) 2019/2088 - Nachhaltigkeit</h2>
              <div className="space-y-4 text-primary-800">
                <p className="font-semibold">Nachhaltigkeit ist für uns ein wichtiges Thema!</p>
                <p>Daher beraten wir unsere Kunden unter anderem auch zu nachhaltigen Kapitalanlagen bei den von uns vermittelten Produkten individuell und persönlich. Aktuell können diese gut bei fondsgebundenen Produkten durch die Auswahl von ESG-konformen Investmentfonds dargestellt werden. Im Rahmen der individuellen Beratung weisen wir auf erkennbare Vor- bzw. Nachteile hin. Bei sonstigen Versicherungsprodukten ist derzeit die Betrachtung der nachhaltigen Kapitalanlage im Hinblick auf deren Kapitalstock häufig noch nicht möglich. Für die Vermittlung von nachhaltigen Kapitalanlagen erhalten wir – und vergüten – regelmäßig die gleichen Vergütungssätze wie für andere Kapitalanlagen auch.</p>
              </div>
            </section>

            {/* Copyright & Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">Copyright & Haftungsausschluss</h2>
              <div className="space-y-4 text-primary-800">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Haftung für eigene Inhalt der Website</h3>
                  <p>Die RP&MG Consulting GmbH und Co. KG ist bemüht, die Angaben auf dieser Website regelmäßig zu aktualisieren, wir übernehmen jedoch keine Verantwortung für die Aktualität der Angaben auf dieser Website. Die Haftung für materielle oder immaterielle Schäden, die durch die Nutzung fehlerhafter und unvollständiger Angaben verursacht werden, ist ausgeschlossen, sofern dies rechtlich zulässig ist. Soweit RP&MG Consulting für eigene Inhalte haftet, ist die Haftung auf den vorhersehbaren Schaden begrenzt.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Haftung für fremde Inhalte und der verlinkten Webseiten</h3>
                  <p>RP&MG Consulting ist für fremde Inhalte auf dieser Website nicht verantwortlich. Für rechtswidrige, fehlerhafte oder unvollständige fremde Inhalte und für einen Schaden, der auf Grund der Nutzung der vorbenannten fremden Inhalte entsteht, haftet allein der Anbieter der fremden Inhalte. RP&MG Consulting macht sich diese fremden Inhalte nur zu eigen, sofern aus den Gesamtumständen erkennbar ist, dass wir uns mit den fremden Inhalten identifizieren. Ansonsten distanzieren wir uns von allen als fremde Inhalte gekennzeichneten Angaben auf dieser Website. Gleiches gilt für fremde Inhalte auf einer mit dieser Website verknüpften fremden Website, auf deren Gestaltung und Inhalte RP&MG Consulting keinen Einfluss hat. RP&MG Consulting war zum Zeitpunkt der Linksetzung keine rechtswidrigen Inhalte auf den verlinkten fremden Websites bekannt. Erlangt RP&MG Consulting Kenntnis davon, dass auf einer mit dieser Website verlinkten fremden Website rechtswidrige Inhalte zur Verfügung gestellt werden, werden wir den betreffenden Link auf dieser Website unverzüglich entfernen.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Urheberrechte und sonstige Rechte</h3>
                  <p>Der Inhalt der Website ist unter Beachtung urheberrechtlicher, wettbewerbsrechtlicher und markenrechtlicher Bestimmungen gestaltet worden. Das Layout, die Texte sowie sonstige Bestandteile der Website sind urheberrechtlich geschützt. Die Reproduktion, Vervielfältigung oder zweckfremde Nutzung des Layouts, der Texte oder anderer urheberrechtlich geschützter Bestandteile der Website sind ohne ausdrückliche Zustimmung von RP&MG Consulting nicht gestattet. Die Website darf aus diesem Grund von Ihnen grundsätzlich nur zu Informationszwecken genutzt werden.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}