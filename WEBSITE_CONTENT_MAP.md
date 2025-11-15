# WEBSITE CONTENT MAP - RPMG ALTERSVORSORGE

**Last Updated:** November 2025
**Website:** RPMG Unternehmerplan - Betriebliche Altersvorsorge
**Purpose:** Complete inventory of all visible text content organized by section

---

## TABLE OF CONTENTS

1. [Navigation](#navigation)
2. [Hero Section](#hero-section)
3. [Problem Statement](#problem-statement-section)
4. [Benefits Grid](#benefits-grid-section)
5. [Savings Calculator](#savings-calculator-section)
6. [How It Works](#how-it-works-section)
7. [Comparison Table](#comparison-table-section)
8. [Trust Elements](#trust-elements-section)
9. [FAQ](#faq-section)
10. [Consultation Form](#consultation-form-section)
11. [Footer](#footer)
12. [Summary & Key Messages](#summary-of-key-messages)

---

## NAVIGATION

**Purpose:** Main website navigation with menu items, CTA button, and scroll-activated trust banner

### Logo
- **Alt text:** "BRAMG Logo"

### Desktop Menu Items
- Start
- Vorteile
- Rechner
- So funktioniert's
- Vergleich
- FAQ

### Primary CTA Button
- **Text:** "Kostenlose Erstberatung"
- **Style:** Gold/bronze button, prominent placement

### Trust Banner (appears after 200px scroll)
- **Text:** "Verlässliche Beratung. Maßgeschneiderte Lösungen. Für Geschäftsführer, die vorausschauend handeln."
- **Style:** Smooth slide-down animation, semi-transparent background
- **Visibility:** Hidden on page load, appears when scrolling down

### Mobile Menu
- Same menu items as desktop
- Hamburger menu icon
- **Mobile CTA:** "Kostenlose Erstberatung"

---

## HERO SECTION

**Purpose:** Main landing section introducing RPMG Unternehmerplan with value proposition and interactive 4-card carousel demonstrating benefits

### Header Badge
- **Text:** "RPMG UNTERNEHMERPLAN"
- **Style:** Shield icon with badge styling

### Target Audience Label
- **Text:** "Für Unternehmer, Geschäftsführer & Vorstände"
- **Style:** Small caps, primary color

### Main Headline (H1)
- **Text:** "Steuern sparen & Privatvermögen aufbauen – 100.000€ Gewinn = 100.000€ für den **Vermögensaufbau**"
- **Styling note:** "Vermögensaufbau" has gradient text effect
- **Location:** src/components/sections/Hero.tsx:70

### Value Proposition
- **Text:** "Nutzen Sie Ihre GmbH für private Vermögensbildung – rechtssicher und steueroptimiert"
- **Style:** Large subheading text

### Key Benefits Badges
- **Text:** "0 % Steuerlast • Ø 7 % Rendite • Rechtssicher"
- **Style:** Inline badges with bullet separators

### Primary CTAs
- **Button 1:** "Ersparnis berechnen" (scrolls to calculator)
- **Button 2:** "Kostenlose Erstberatung" (scrolls to contact form)

---

### Hero Carousel (4 Rotating Cards)

#### Card 1: SAVINGS TOWERS COMPARISON
**Purpose:** Visual comparison of normal taxation vs. RPMG optimization

**Label:** "Vergleich"

**Main Headline:** "€100.000 Gewinn: Was kommt wirklich bei Ihnen an?"

**Subheading:** "Sehen Sie den direkten Vergleich zwischen Normalbesteuerung und RPMG-Optimierung"

**Tower 1 - Normalbesteuerung:**
- **Label:** "NORMALBESTEUERUNG"
- **Total shown:** ~€55.000 bleibt übrig
- **Segment 1:** "Steuern & Abgaben" | "-€45.000"
- **Segment 2:** "Privates Vermögen" | "+€55.000"

**Advantage Divider:**
- **Text:** "VORTEIL"
- **Amount:** "+€45.000"

**Tower 2 - RPMG-Optimiert:**
- **Label:** "RPMG-OPTIMIERT"
- **Total shown:** €100.000 wirkt für Sie
- **Highlight:** "100 % steuerfrei investierbar"
- **Segment:** "Privates Vermögen" | "+€100.000"

**Comparison Points:**
| Normalbesteuerung (✗) | RPMG-Optimiert (✓) |
|----------------------|-------------------|
| €45.000 ans Finanzamt | €100.000 steuerfrei investiert |
| Jedes Jahr aufs Neue | Sofort Renditechancen (Ø 7%) |
| Nur €55.000 bleiben übrig | Ihr volles Kapital arbeitet |

---

#### Card 2: TRUST CARD
**Purpose:** Build credibility through statistics and social proof

**Label:** "Vertrauen"

**Main Headline:** "Vertraut von Deutschlands erfolgreichsten Unternehmern"

**Subheading:** "Erfolgreiche Geschäftsführer in ganz Deutschland setzen auf RPMG"

**Metrics Grid (2×2):**

| Metric 1 | Metric 2 |
|----------|----------|
| **4,9 / 5** | **10+** |
| Mandantenrating | Jahre Erfahrung |
| Höchste Zufriedenheit | Bewährte Expertise |

| Metric 3 | Metric 4 |
|----------|----------|
| **95 %** | **400+** |
| Weiterempfehlung | Mandate |
| Zufriedene Mandate | Aktive Geschäftsführer |

**Footer Badge:**
- **Text:** "★★★★★ **Ausgezeichnet bewertet** auf ProvenExpert & Trustpilot"

---

#### Card 3: LEGAL CARD (RECHTSSICHERHEIT)
**Purpose:** Address security and legal compliance concerns

**Label:** "Rechtssicherheit"

**Main Headline:** "Dreifach gesichert – für Ihren Seelenfrieden"

**Subheading:** "Rechtlich fundiert, staatlich überwacht und seit über einem Jahrzehnt erfolgreich umgesetzt."

**Three Security Pillars:**

**Pillar 1:**
- **Icon:** Building2 (government building)
- **Title:** "Staatlich überwacht"
- **Subtitle:** "gesetzliche Sicherheit"

**Pillar 2:**
- **Icon:** Shield
- **Title:** "Insolvenzsicher"
- **Subtitle:** "geschütztes Privatvermögen"

**Pillar 3:**
- **Icon:** Award
- **Title:** "10+ Jahre bewährt"
- **Subtitle:** "vertrauen Sie unserer Erfahrung"

**Footer Certification:**
- **Text:** "✓ **Geprüft und bestätigt**"
- **Icon:** CheckCircle (green)
- **Location:** src/components/sections/HeroLegalCard.tsx:74

---

#### Card 4: OUTCOME CARD (KAPITALWACHSTUM)
**Purpose:** Demonstrate long-term wealth growth advantage

**Label:** "Kapitalwachstum"

**Main Headline:** "Warum RPMG-Mandate durchschnittlich €845.000 mehr haben"

**Subheading:** "Der Unterschied zwischen 3% und 7% Rendite über 25 Jahre"

**Chart Elements:**

**Y-Axis Labels:**
- €2,5M
- €1,25M
- €0

**X-Axis Labels:**
- 0
- 12,5 Jahre
- 25 Jahre

**Data Points:**
- **RPMG Line (Green):** €2,18 Mio. at 25 years
- **Klassische Anbieter (Gray dashed):** €1,34 Mio. at 25 years
- **Difference highlighted:** €845.000

**Legend:**
- 🟢 "RPMG (Ø 7% p.a.)"
- ⚪ "Klassische Anbieter (Ø 3% p.a.)"

**Key Takeaways:**
- "→ **Bewährte Strategie:** 7% durchschnittliche Rendite über 25 Jahre – geprüft und bestätigt."
- "→ **Transparenz:** Volle Kontrolle über Ihre €2,18 Millionen Alterskapital."

**Location:** src/components/sections/HeroOutcomeCard.tsx

---

## PROBLEM STATEMENT SECTION

**Purpose:** Identifies three key pain points that resonate with target audience

**Section ID:** #herausforderungen

### Section Header
- **H2:** "3 Herausforderungen für **Geschäftsführer**"
  - *Styling note:* "Geschäftsführer" has gradient text effect
- **Subheading:** "Sie sind nicht allein: Diese Themen beschäftigen die meisten Unternehmer"

### Challenge Cards (3 cards in grid layout)

#### Challenge 1: HOHE STEUERLAST
- **Icon:** TrendingDown (red/warning)
- **Title:** "Hohe Steuerlast"
- **Description:** "Bis zu 45% Steuern + Soli schmälern Ihren Gewinn"

#### Challenge 2: KOMPLEXE VORSORGEOPTIONEN
- **Icon:** AlertCircle (yellow/info)
- **Title:** "Komplexe Vorsorgeoptionen"
- **Description:** "§ 3 Nr. 63 und § 4d EStG, bAV, Rürup - welcher Weg ist richtig?"
- **Location:** src/components/sections/ProblemStatement.tsx:17

#### Challenge 3: KEINE ZEIT FÜR FINANZPLANUNG
- **Icon:** Clock (blue/neutral)
- **Title:** "Keine Zeit für Finanzplanung"
- **Description:** "Zwischen Tagesgeschäft und Unternehmensentwicklung fehlt die Zeit"
- **Location:** src/components/sections/ProblemStatement.tsx:22

### Bridge to Solution
- **Text:** "Wir lösen alle 3 Herausforderungen in einem **30-Minuten-Gespräch**"
- **Style:** Centered, bold, acts as transition to next section

---

## BENEFITS GRID SECTION

**Purpose:** Highlights four main tax advantages and benefits of the RPMG solution

**Section ID:** #vorteile

### Section Header
- **H2:** "Steuerliche **Vorteile**"
  - *Styling note:* "Vorteile" has gradient text effect
- **Subheading:** "Nutzen Sie die gesetzlichen Möglichkeiten optimal aus und profitieren Sie von erheblichen Steuervorteilen für Ihre Altersvorsorge."

### Benefit Cards (4 cards in grid)

#### Benefit 1: STEUERERSPARNIS
- **Icon:** TrendingUp (green, upward arrow)
- **Title:** "Profitieren Sie z.B. von 15.120 € Steuerersparnis jährlich"
- **Description:** "Bei 42% Grenzsteuersatz und 3.000 € monatlich."
- **Highlight Badge:** "Unternehmenssteuern sparen"
- **Location:** src/components/sections/BenefitsGrid.tsx:22-24

#### Benefit 2: BETRIEBSAUSGABE
- **Icon:** PiggyBank (savings)
- **Title:** "100 % Betriebsausgabe – mindert Ihren Gewinn"
- **Description:** "Vollständig abzugsfähig, senkt steuerpflichtigen Gewinn."
- **Highlight Badge:** "Privatvermögen aufbauen mit Ihrem Gewinn"
- **Location:** src/components/sections/BenefitsGrid.tsx:28-30

#### Benefit 3: INSOLVENZSICHERHEIT
- **Icon:** Shield (protection)
- **Title:** "Insolvenzsicher & rechtlich abgesichert"
- **Description:** "privater Wohlstand auch in Krisen gesichert"
- **Highlight Badge:** "durch staatliche Vorgaben geschützt"
- **Location:** src/components/sections/BenefitsGrid.tsx:34-36

#### Benefit 4: FAMILIENVORSORGE
- **Icon:** Users (family)
- **Title:** "Auch für Ehepartner & Familie nutzbar"
- **Description:** "Zusätzliche Steuervorteile für die ganze Familie."
- **Highlight Badge:** "Familienvermögen erhöhen"
- **Location:** src/components/sections/BenefitsGrid.tsx:40-42

---

## SAVINGS CALCULATOR SECTION

**Purpose:** Interactive tool to calculate personalized tax savings and retirement wealth projections

**Section ID:** #rechner

### Section Header
- **H2:** "Was kann ich **sparen?**"
  - *Styling note:* "sparen?" has gradient text effect
- **Subheading:** "Berechnen Sie Ihre individuelle Steuerersparnis und Ihr Vermögen im Ruhestand. Passen Sie die Werte an Ihre Situation an – die Ergebnisse aktualisieren sich sofort."

---

### Left Panel: INPUT CONTROLS

#### Panel Header
- **H3:** "Ihre Angaben"
- **Subtitle:** "Stellen Sie Beitrag und Steuersatz nach Wunsch ein."

#### Input 1: MONATLICHER BEITRAG
- **Label:** "Monatlicher Beitrag"
- **Input type:** Range slider
- **Range:** 50 € to 3.000 €
- **Default value:** ~1.500 €

**Tick Marks:**
- **292 €** — "SV-frei" (social security exempt)
- **644 €** — "Max. steuerfrei" (maximum tax-free)

#### Input 2: LAUFZEIT
- **Label:** "Laufzeit"
- **Input type:** Range slider
- **Range:** 5 Jahre to 40 Jahre
- **Default value:** 25 Jahre

#### Input 3: GRENZSTEUERSATZ
- **Label:** "Ihr Grenzsteuersatz"
- **Input type:** Button group (presets)

**Preset Buttons:**
- **30%** — "Kleine GmbH"
- **35%** — "Wachstum"
- **42%** — "Top-Satz" (default selected)
- **45%** — "Spitzensteuersatz"

#### Information Box
- **Icon:** Info circle
- **Label:** "Hinweis"
- **Text:** "Berechnung basiert auf 7 % Nettorendite. Individualisierung im Gespräch."

---

### Right Panel: RESULTS DISPLAY

#### Panel Header
- **H3:** "Ihre Ergebnisse"
- **Subtitle:** "Zahlen aktualisieren sich, sobald Sie Regler oder Presets ändern."

#### Result 1: GESPARTE STEUERN P.A.
- **Label:** "Gesparte Steuern p.a."
- **Value:** [Dynamically calculated, e.g., "15.120 €"]
- **Icon:** Euro symbol in circle
- **Detail text:** "[Tax rate]% auf [Annual contribution] Jahresbeitrag."
- **Example:** "42% auf 36.000 € Jahresbeitrag."

#### Result 2: VERMÖGEN NACH X JAHREN
- **Label:** "Vermögen nach [years] Jahren"
- **Value:** [Dynamically calculated, e.g., "1.574.000 €"]
- **Icon:** Trending up arrow
- **Detail text:** "bei monatlichem Sparen und 7 % Rendite."
- **Location:** src/components/sections/SavingsCalculator.tsx:294

#### Result 3: RENDITEVORSPRUNG
- **Label:** "Renditevorsprung"
- **Value:** [Dynamically calculated as %, e.g., "+182%"]
- **Icon:** Bar chart
- **Detail text:** "Verglichen mit einer klassischen Anlage nach Steuern."
- **Location:** src/components/sections/SavingsCalculator.tsx:316

#### Bottom CTA
- **Button text:** "Detaillierte Analyse anfordern"
- **Button style:** Full-width, gradient button
- **Action:** Scrolls to consultation form

---

## HOW IT WORKS SECTION

**Purpose:** Explains the simple three-step process from initial consultation to full implementation

**Section ID:** #so-funktionierts

### Section Header
- **H2:** "In 3 Schritten zu Ihrer **Versorgung**"
  - *Styling note:* "Versorgung" has gradient text effect
- **Subheading:** "Wir begleiten Sie von der ersten Analyse bis zur vollständigen Umsetzung und darüber hinaus – transparent, professionell und auf Ihre Bedürfnisse zugeschnitten."
- **Location:** src/components/sections/HowItWorks.tsx:45-46

---

### Timeline Steps (3 cards with connecting line)

#### Step 01: ANALYSE
- **Step number:** "01"
- **Icon:** Search (magnifying glass)
- **Title:** "Analyse"
- **Description:** "Kostenlose Beratung + Potenzialanalyse"
- **Progress indicator:** "Schritt 1 von 3"
- **Features:** (empty array - can be populated with bullet points if needed)

#### Step 02: KONZEPT
- **Step number:** "02"
- **Icon:** FileText (document)
- **Title:** "Konzept"
- **Description:** "Maßgeschneiderte Strategie"
- **Progress indicator:** "Schritt 2 von 3"
- **Location:** src/components/sections/HowItWorks.tsx:20

#### Step 03: UMSETZUNG
- **Step number:** "03"
- **Icon:** Rocket (launch)
- **Title:** "Umsetzung"
- **Description:** "Rechtssichere Implementierung + laufende Betreuung"
- **Progress indicator:** "Schritt 3 von 3"

---

### Bottom CTA Card
**Style:** Gradient background (primary-600 to primary-700), white text, centered

- **H3:** "Bereit für den ersten Schritt?"
- **Body text:** "Vereinbaren Sie jetzt Ihre kostenlose Erstberatung und erfahren Sie, wie viel Sie sparen können."
- **Button text:** "Jetzt kostenlos beraten lassen"
- **Button style:** White background with primary text
- **Button icon:** ChevronRight arrow
- **Location:** src/components/sections/HowItWorks.tsx:125-135

---

## COMPARISON TABLE SECTION

**Purpose:** Detailed side-by-side comparison of two pension schemes: § 3 Nr. 63 EStG vs. § 4d EStG

**Section ID:** #vergleich

### Section Header
- **H2:** "§ 3 Nr. 63 EStG vs. **§ 4d EStG**"
  - *Styling note:* "§ 4d EStG" has gradient text effect
- **Subheading:** "Beide Vorsorgewege bieten erhebliche Steuervorteile. Kombinieren Sie sie für eine Steuerersparnis von bis zu 100.000 € pro Jahr."
- **Location:** src/components/sections/ComparisonTable.tsx:67

---

### Table Structure

#### Table Headers
| Kriterium | Direktversicherung<br/>§ 3 Nr. 63 EStG | Unterstützungskasse<br/>§ 4d EStG |
|-----------|--------------------------------------|----------------------------------|

---

### Table Rows (8 comparison criteria)

#### Row 1: VERFÜGBARKEIT
| Kriterium | Direktversicherung | Unterstützungskasse |
|-----------|-------------------|---------------------|
| Verfügbarkeit | Ab Betriebsgründung | Nach 5 Jahren Betriebszugehörigkeit |

#### Row 2: MONATLICHER HÖCHSTBEITRAG
| Kriterium | Direktversicherung | Unterstützungskasse |
|-----------|-------------------|---------------------|
| Monatlicher Höchstbeitrag | 644 € | **unbegrenzt** |

**Location:** src/components/sections/ComparisonTable.tsx:15-17

#### Row 3: JÄHRLICHER HÖCHSTBEITRAG
| Kriterium | Direktversicherung | Unterstützungskasse |
|-----------|-------------------|---------------------|
| Jährlicher Höchstbeitrag | 7.728 € | **unbegrenzt** |

**Location:** src/components/sections/ComparisonTable.tsx:20-22

#### Row 4: STEUERLICHE BEHANDLUNG
| Kriterium | Direktversicherung | Unterstützungskasse |
|-----------|-------------------|---------------------|
| Steuerliche Behandlung | Steuerfrei & sozialabgabenfrei | Voll als Betriebsausgabe abzugsfähig |

#### Row 5: VERSTEUERUNG IM ALTER
| Kriterium | Direktversicherung | Unterstützungskasse |
|-----------|-------------------|---------------------|
| Versteuerung im Alter | Nachgelagerte Besteuerung | Nachgelagerte Besteuerung |

#### Row 6: KOMBINIERBAR
| Kriterium | Direktversicherung | Unterstützungskasse |
|-----------|-------------------|---------------------|
| Kombinierbar | ✓ (green checkmark) | ✓ (green checkmark) |

#### Row 7: FÜR FAMILIENANGEHÖRIGE
| Kriterium | Direktversicherung | Unterstützungskasse |
|-----------|-------------------|---------------------|
| Für Familienangehörige | ✓ (green checkmark) | ✓ (green checkmark) |

#### Row 8: INSOLVENZSCHUTZ
| Kriterium | Direktversicherung | Unterstützungskasse |
|-----------|-------------------|---------------------|
| Insolvenzschutz | ✓ (green checkmark) | ✓ (green checkmark) |

---

### Table Footer
**Style:** Gradient background, white text, centered

- **Text:** "✓ Beide Wege kombinierbar für eine Steuerersparnis bis zu 100.000 € pro Jahr"
- **Location:** src/components/sections/ComparisonTable.tsx:141

### Bottom CTA
- **Button text:** "Jetzt Ihre Ersparnis berechnen"
- **Button action:** Scrolls to calculator section

---

## TRUST ELEMENTS SECTION

**Purpose:** Build credibility through testimonials, statistics, partner logos, and certifications

**Section ID:** #warum-rpmg

### Section Header
- **H2:** "Warum **400+ Geschäftsführer** auf RPMG vertrauen"
  - *Styling note:* "400+ Geschäftsführer" has gradient text effect
- **Subheading:** "Seit über 10 Jahren helfen wir erfolgreichen Unternehmern dabei, ihr Vermögen intelligent und steuersparend aufzubauen."

---

### Statistics Grid (4 key metrics)

#### Stat 1: ZUFRIEDENE GESCHÄFTSFÜHRER
- **Number:** "400+"
- **Label:** "Zufriedene Geschäftsführer"
- **Icon:** Users

#### Stat 2: VERWALTETES VERMÖGEN
- **Number:** "€250M+"
- **Label:** "Verwaltetes Vermögen"
- **Icon:** TrendingUp

#### Stat 3: DURCHSCHNITTLICHE RENDITE
- **Number:** "8.2%"
- **Label:** "Ø Rendite p.a."
- **Icon:** PieChart

#### Stat 4: WEITEREMPFEHLUNGSRATE
- **Number:** "98%"
- **Label:** "Weiterempfehlungsrate"
- **Icon:** Heart

---

### Client Testimonials (3 testimonial cards)

#### Testimonial 1
- **Rating:** ★★★★★ (5/5 stars)
- **Quote:** "Robert Piccini und sein Team haben mir geholfen, jährlich über 40.000€ an Steuern zu sparen. Die persönliche Betreuung ist außergewöhnlich."
- **Client name:** "Dr. Andreas Hoffmann"
- **Client role:** "Geschäftsführer, Engineering Solutions GmbH"
- **Avatar:** Placeholder or client photo

#### Testimonial 2
- **Rating:** ★★★★★ (5/5 stars)
- **Quote:** "Dank der Expertise von RPMG konnte ich in nur 2 Jahren mein Privatvermögen um über 180.000€ steigern - komplett steuerfrei."
- **Client name:** "Petra Zimmermann"
- **Client role:** "CEO, Digital Innovations AG"
- **Avatar:** Placeholder or client photo

#### Testimonial 3
- **Rating:** ★★★★★ (5/5 stars)
- **Quote:** "Marvin Gorkow hat mir die perfekte Strategie entwickelt. Transparenz, Flexibilität und Rendite - besser geht es nicht."
- **Client name:** "Marcus Weber"
- **Client role:** "Geschäftsführer, Weber Consulting UG"
- **Avatar:** Placeholder or client photo

---

### Partners and Awards Section

#### Section Title
- **H3:** "Unsere Partner und Auszeichnungen"

#### Partner Logos (5 financial institutions)
1. **Deutsche Bank** (logo)
2. **Commerzbank** (logo)
3. **DWS Group** (logo)
4. **Union Investment** (logo)
5. **Allianz Global** (logo)

#### Certification Badges (3 certifications)
1. **"ISO 9001 Zertifiziert"**
   - Icon: CheckCircle
   - Style: Badge with green accent

2. **"BaFin Registriert"**
   - Icon: Shield
   - Style: Badge with blue accent

3. **"Mitglied im BVI"**
   - Icon: Award
   - Style: Badge with gold accent

---

## FAQ SECTION

**Purpose:** Answers common questions to reduce friction and address objections

**Section ID:** #faq

### Section Header
- **H2:** "Alle Antworten auf Ihre **Fragen**"
  - *Styling note:* "Fragen" has gradient text effect
- **Subheading:** "Hier finden Sie detaillierte Informationen zu den häufigsten Fragen rund um die betriebliche Altersvorsorge für Geschäftsführer."

---

### FAQ Items (8 expandable questions)

**Interaction:** Click question to expand/collapse answer. First question open by default.

---

#### FAQ 1: WIE WIRD DAS KAPITAL INVESTIERT?
- **Question:** "Wie wird das Kapital investiert?"
- **Answer:** "typischerweise in intelligente ETF- und in Investmentfondsstrategien, um eine breite Streuung und attraktive Renditechancen zu erzielen."
- **Location:** src/components/sections/FAQ.tsx:12-13

---

#### FAQ 2: FÜR WEN EIGNET SICH DAS KONZEPT?
- **Question:** "Für wen eignet sich das Konzept?"
- **Answer:** "Ideal für Geschäftsführer und Gesellschafter-Geschäftsführer von GmbHs oder UGs mit ausreichenden Gewinnen. Besonders lohnenswert ab 50.000 € Jahresgewinn. Um Ihnen eine optimale Beratung anbieten zu können, empfehlen wir eine Laufzeit von mindestens 12-15 Jahren bis zum Ruhestand. So können Sie das volle Potenzial der Steuervorteile ausschöpfen."
- **Location:** src/components/sections/FAQ.tsx:16-17

---

#### FAQ 3: WIE HOCH IST DIE TATSÄCHLICHE STEUERERSPARNIS?
- **Question:** "Wie hoch ist die tatsächliche Steuerersparnis?"
- **Answer:** "Diese Antwort ist sehr individuell. Bei einem Beispiel von 3.000 € monatlichem Aufwand und 42% Grenzsteuersatz sparen Sie 15.120 € jährlich."
- **Location:** src/components/sections/FAQ.tsx:20-21

---

#### FAQ 4: WIE SICHER IST DAS KONZEPT?
- **Question:** "Wie sicher ist das Konzept?"
- **Answer:** "Da wir uns hier im geregelten Rechtsrahmen bewegen brauchen Sie sich keine Sorgen zu machen. Das Konzept ist rechtlich verbindlich und Ihr Vermögen am Ende insolvenzgeschützt."
- **Location:** src/components/sections/FAQ.tsx:24-25

---

#### FAQ 5: WIE LANGE DAUERT DIE EINRICHTUNG?
- **Question:** "Wie lange dauert die Einrichtung?"
- **Answer:** "4-6 Wochen nach Erstberatung"
- **Location:** src/components/sections/FAQ.tsx:28-29

---

#### FAQ 6: HANDELT ES SICH BEI DER BERATUNG UM EINE STEUERBERATUNG?
- **Question:** "Handelt es sich bei der Beratung um eine Steuerberatung?"
- **Answer:** "Nein, wir selbst sind ausdrücklich keine Steuerberatung. Unsere Konzepte und die Umsetzung kann in Koordination mit Ihrem Steuerberater erfolgen."
- **Location:** src/components/sections/FAQ.tsx:32-33

---

#### FAQ 7: BIETEN SIE AUCH BERATUNGEN VOR ORT AN?
- **Question:** "Bieten Sie auch Beratungen vor Ort an?"
- **Answer:** "Nein! Da wir deutschlandweit beraten liegt unser Fokus auf einer modernen onlinebasierten Beratung."
- **Location:** src/components/sections/FAQ.tsx:36-37

---

#### FAQ 8: WIE LÄUFT DIE KOSTENLOSE ERSTBERATUNG AB?
- **Question:** "Wie läuft die kostenlose Erstberatung ab?"
- **Answer:** "Sobald Sie einen Termin zur kostenlosen Erstberatung buchen, bekommen Sie eine Bestätigung und einen Link zu Ihrem Onlinetermin. Im Termin wird Ihnen das Konzept erläutert. Einer unserer Spezialisten erklärt in rund 30-45 Minuten, ob und wie sich das Konzept in Ihrem Fall umsetzen lässt. Kostenlos und unverbindlich."
- **Location:** src/components/sections/FAQ.tsx:40-41

---

## CONSULTATION FORM SECTION

**Purpose:** Lead capture form with team introduction and contact information

**Section ID:** #beratung

### Section Header
- **H2:** "Kontakt & **Beratung**"
  - *Styling note:* "Beratung" has gradient text effect
- **Subheading:** "Vereinbaren Sie ein kostenloses Erstgespräch zur individuellen Vermögensplanung. Wir analysieren Ihre Situation und zeigen Ihnen konkrete Optimierungspotenziale."
- **Location:** src/components/sections/ConsultationForm.tsx:93

---

## LEFT COLUMN: INFORMATION

### Team Section
**Title:** "Ihr Beratungsteam"

#### Team Member 1
- **Photo:** /team/Marvin-1.2.jpg
- **Name:** "Marvin"
- **Title:** "Geschäftsführer"

#### Team Member 2
- **Photo:** /team/Robert6.jpg
- **Name:** "Robert"
- **Title:** "Geschäftsführer"

#### Team Member 3
- **Photo:** /team/Tarek5.jpg
- **Name:** "Tarek"
- **Title:** "Partner"

---

### What to Expect Box
**H3:** "Was Sie erwartet:"

**List items (5 checkmarks):**
- ✓ "Analyse Ihrer aktuellen Situation"
- ✓ "Aufzeigen von Optimierungspotenzialen"
- ✓ "Konkrete Handlungsempfehlungen"
- ✓ "Individuelle Vermögensplanung"
- ✓ "Alle Ihre Fragen werden beantwortet"

**Location:** src/components/sections/ConsultationForm.tsx:171

---

### Contact Information Cards (5 info boxes)

#### Contact 1: TELEFON
- **Icon:** Phone
- **Label:** "Telefon"
- **Value:** "+49 (0) 221 / 92 42 80 30"
- **Link:** tel:+49221924280030

#### Contact 2: E-MAIL
- **Icon:** Mail
- **Label:** "E-Mail"
- **Value:** "info@rpmg.de"
- **Link:** mailto:info@rpmg.de

#### Contact 3: ADRESSE
- **Icon:** MapPin
- **Label:** "Adresse"
- **Value:** "Lindenstraße 14, 50674 Köln"

#### Contact 4: BERATUNGSZEITEN
- **Icon:** Clock
- **Label:** "Beratungszeiten"
- **Value:** "Mo-Fr: 10:00 - 20:00 Uhr"

#### Contact 5: BERATUNGSFORMAT
- **Icon:** Video
- **Label:** "Telefonberatung oder Videoberatung"
- **Value:** "Nach Terminvereinbarung"

---

## RIGHT COLUMN: CONSULTATION FORM

### Form Header
- **H3:** "Kostenlose Analyse: Wie viel können **SIE** sparen?"
  - *Styling note:* "SIE" has gradient text effect

---

### Form Fields

#### Field 1: NAME (Required)
- **Label:** "Name *"
- **Input type:** Text
- **Placeholder:** "Max Mustermann"
- **Validation:** Required

#### Field 2: E-MAIL (Required)
- **Label:** "E-Mail *"
- **Input type:** Email
- **Placeholder:** "max@beispiel.de"
- **Validation:** Required, valid email format

#### Field 3: TELEFON (Required)
- **Label:** "Telefon *"
- **Input type:** Tel
- **Placeholder:** "+49 123 456789"
- **Validation:** Required

#### Field 4: FIRMA (Required)
- **Label:** "Firma *"
- **Input type:** Text
- **Placeholder:** "Musterfirma GmbH"
- **Validation:** Required

#### Field 5: JÄHRLICHER UNTERNEHMENSGEWINN (Required)
- **Label:** "Jährlicher Unternehmensgewinn *"
- **Input type:** Select dropdown
- **Placeholder:** "Bitte wählen"
- **Validation:** Required

**Dropdown Options:**
1. "50.000 - 100.000 €"
2. "100.000 - 250.000 €"
3. "250.000 - 500.000 €"
4. "500.000 - 1.000.000 €"
5. "Über 1.000.000 €"

#### Field 6: NACHRICHT (Optional)
- **Label:** "Nachricht (optional)"
- **Input type:** Textarea
- **Placeholder:** "Gibt es etwas, das Sie uns mitteilen möchten?"
- **Validation:** None (optional field)

#### Field 7: PRIVACY CONSENT (Required)
- **Input type:** Checkbox
- **Label:** "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *"
- **Link:** "Datenschutzerklärung" (opens in new tab)
- **Validation:** Required (must be checked)

---

### Submit Button
- **Default text:** "Kostenlose Beratung anfordern"
- **Loading text:** "Wird gesendet..."
- **Button style:** Full-width, gradient, large
- **Button icon:** Send icon

---

### Success Message (Post-submission)
**Style:** Centered, white background, green checkmark icon

- **Icon:** CheckCircle (large, green)
- **H2:** "Vielen Dank für Ihr Vertrauen!"
- **Main text:** "Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen, um einen Termin für Ihre kostenlose Erstberatung zu vereinbaren."
- **Additional text:** "Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen weiteren Informationen und können sich schon jetzt auf konkrete Einsparpotenziale freuen."

---

## FOOTER

**Purpose:** Site-wide footer with company info, links, newsletter signup, and legal information

**Background:** Dark (primary-950)
**Text color:** White/light

---

### Company Information Block

#### Logo
- **Logo:** BRAMG Logo (inverted/white version)
- **Alt text:** "BRAMG Logo"

#### Company Description
- **Text:** "Ihr Partner für betriebliche Altersvorsorge. Wir helfen Geschäftsführern dabei, bis zu 100.000 € pro Jahr steuerfrei für den Ruhestand anzusparen."

#### Contact Details
- **Phone:**
  - Icon: Phone
  - Text: "+49 (0) 221 / 92 42 80 30"
  - Link: tel:+49221924280030

- **Email:**
  - Icon: Mail
  - Text: "info@rpmg.de"
  - Link: mailto:info@rpmg.de

- **Address:**
  - Icon: MapPin
  - Text: "Lindenstraße 14, 50674 Köln"

---

### Footer Navigation Columns (3 columns)

#### Column 1: UNTERNEHMEN
**Heading:** "Unternehmen"

**Links:**
- "Über uns"
- "Team"
- "Karriere"
- "Partner werden"

#### Column 2: SERVICE
**Heading:** "Service"

**Links:**
- "Betriebliche Altersvorsorge"
- "Beratung"
- "FAQ"
- "Downloads"

#### Column 3: RECHTLICHES
**Heading:** "Rechtliches"

**Links:**
- "Impressum"
- "Datenschutz"
- "AGB"
- "Cookie-Einstellungen"

---

### Newsletter Signup Box

#### Section Header
- **Heading:** "Newsletter"
- **Description:** "Erhalten Sie regelmäßig Tipps zur Steueroptimierung und Altersvorsorge."

#### Newsletter Form
- **Input placeholder:** "Ihre E-Mail-Adresse"
- **Button text:** "Abonnieren"
- **Button icon:** Send

---

### Bottom Bar

#### Copyright Notice
- **Text:** "© [Current Year] RP&MG Consulting GmbH & Co. KG. Alle Rechte vorbehalten."
- **Dynamic:** Year updates automatically

#### Social Media Icons (4 links)
- **Facebook** (icon link)
- **Twitter** (icon link)
- **LinkedIn** (icon link)
- **Instagram** (icon link)

#### Trust Badges (4 badges, separated by bullets)
- "BaFin registriert"
- "ISO 9001 zertifiziert"
- "Mitglied im BVI"
- "SSL verschlüsselt"

---

## SUMMARY OF KEY MESSAGES

### Primary Value Proposition
**Core message repeated throughout site:**
> "100.000€ Gewinn = 100.000€ für den Vermögensaufbau"

**Supporting messages:**
- 0% Steuerlast
- Ø 7% Rendite
- Rechtssicher
- Bis zu €100.000 jährlich steuerfrei

---

### Target Audience (explicitly mentioned)
- Geschäftsführer (Managing Directors)
- Unternehmer (Entrepreneurs)
- Vorstände (Board Members)
- Gesellschafter-Geschäftsführer (Shareholder-Managing Directors)
- **Company types:** GmbH, UG (haftungsbeschränkt)
- **Minimum threshold:** 50.000 € annual profit

---

### Legal/Tax References (repeated)
- **§ 3 Nr. 63 EStG** — Direktversicherung (direct insurance)
- **§ 4d EStG** — Unterstützungskasse (support fund)
- **bAV** — Betriebliche Altersvorsorge (occupational pension)
- **Rürup** — Alternative pension option

---

### Key Statistics (social proof)
- **400+** Zufriedene Geschäftsführer
- **€250M+** Verwaltetes Vermögen
- **8.2%** Ø Rendite p.a.
- **98%** Weiterempfehlungsrate
- **10+ Jahre** Erfahrung
- **4,9/5** Mandantenrating
- **95%** Weiterempfehlung

---

### Emotional Benefits Highlighted
1. **Sicherheit** (Security)
   - Rechtssicher
   - Insolvenzsicher
   - Staatlich überwacht
   - Geschütztes Privatvermögen

2. **Verlässlichkeit** (Reliability)
   - Verlässliche Beratung
   - Bewährte Expertise
   - 10+ Jahre bewährt

3. **Seelenfrieden** (Peace of mind)
   - Dreifach gesichert
   - Volle Kontrolle
   - Transparenz

4. **Vorausschauend** (Forward-thinking)
   - Für Geschäftsführer, die vorausschauend handeln
   - Intelligente Vermögensbildung

---

### Call-to-Action Variations (7 different CTAs)

**Primary CTAs:**
1. "Kostenlose Erstberatung" (appears 3x - Navigation, Hero, Mobile)
2. "Ersparnis berechnen" (Hero, Comparison Table)
3. "Jetzt kostenlos beraten lassen" (How It Works section)

**Secondary CTAs:**
4. "Detaillierte Analyse anfordern" (Calculator)
5. "Jetzt Ihre Ersparnis berechnen" (Comparison Table)
6. "Kostenlose Beratung anfordern" (Contact Form submit)
7. "Kostenlose Analyse: Wie viel können SIE sparen?" (Form header)

**Most frequent CTA:** "Kostenlose Erstberatung"

---

### Messaging Strategy

#### Problem-Agitate-Solve Framework

**Problem (Challenge section):**
1. Hohe Steuerlast (45% + Soli)
2. Komplexe Vorsorgeoptionen
3. Keine Zeit für Finanzplanung

**Agitate (Comparison cards):**
- €45.000 goes to tax office yearly
- Only €55.000 remains from €100.000 profit
- Traditional pension = lower returns (3% vs 7%)

**Solve (Benefits + How It Works):**
- €100.000 steuerfrei investiert
- Ø 7% Rendite
- 3-step process in 30-minute conversation
- 4-6 weeks to implementation

---

### Tone and Voice Characteristics

**Professional but approachable:**
- Direct address ("Sie" - formal you)
- Clear, jargon-free explanations
- Expert but not condescending

**Benefit-focused:**
- Emphasizes outcomes over features
- "Vermögensaufbau" over "Altersvorsorge"
- "Steuerersparnis" over technical tax code

**Trust-building:**
- Statistics and social proof
- Client testimonials
- Certifications and partnerships
- Transparent processes

**Action-oriented:**
- Multiple CTAs
- Clear next steps
- Specific timeframes (30 minutes, 4-6 weeks)
- Concrete numbers and examples

---

## CONTENT LOCATION REFERENCE

### File Structure Map

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx .............. Trust banner, menu
│   │   └── Footer.tsx .................. Footer content
│   └── sections/
│       ├── Hero.tsx .................... Main headline, CTAs
│       ├── HeroCarouselCard.tsx ........ Carousel wrapper
│       ├── HeroOutcomeCard.tsx ......... Card 4: Growth chart
│       ├── HeroLegalCard.tsx ........... Card 3: Legal security
│       ├── HeroTrustCard.tsx ........... Card 2: Trust metrics
│       ├── HeroSavingsTowers.tsx ....... Card 1: Comparison
│       ├── ProblemStatement.tsx ........ 3 challenges
│       ├── BenefitsGrid.tsx ............ 4 benefit cards
│       ├── SavingsCalculator.tsx ....... Interactive calculator
│       ├── HowItWorks.tsx .............. 3-step process
│       ├── ComparisonTable.tsx ......... § 3 vs § 4d table
│       ├── TrustElements.tsx ........... Testimonials, stats
│       ├── FAQ.tsx ..................... 8 FAQ items
│       └── ConsultationForm.tsx ........ Contact form
```

---

## USAGE NOTES

### For Content Updates:
- All text is stored in component files (*.tsx)
- Update text directly in the components
- Changes hot-reload in development mode
- Commit changes to git for version control

### For Translation:
- Create language-specific content files
- Maintain same structure for consistency
- Consider cultural adaptations for messaging

### For SEO:
- Keywords: Betriebliche Altersvorsorge, Geschäftsführer, Steuerersparnis, § 3 Nr. 63, § 4d EStG
- Long-tail: "GmbH Geschäftsführer Altersvorsorge steuerfrei"
- Local: "Köln", "Deutschland"

### For A/B Testing:
- Primary conversion goal: Contact form submission
- Secondary goal: Calculator interaction
- Test variations: CTA copy, headline messaging, trust elements

---

**End of Content Map**
**Total Sections:** 10
**Total Text Elements:** 200+
**Total CTAs:** 7 variations
**Total Words:** ~3,500

---

*This content map is current as of November 2025. For the most up-to-date content, always refer to the live website code in the repository.*
