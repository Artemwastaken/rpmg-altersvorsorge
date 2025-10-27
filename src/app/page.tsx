import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import ProblemStatement from '@/components/sections/ProblemStatement'
import BenefitsGrid from '@/components/sections/BenefitsGrid'
import SavingsCalculator from '@/components/sections/SavingsCalculator'
import HowItWorks from '@/components/sections/HowItWorks'
import ComparisonTable from '@/components/sections/ComparisonTable'
import TrustElements from '@/components/sections/TrustElements'
import FAQ from '@/components/sections/FAQ'
import ConsultationForm from '@/components/sections/ConsultationForm'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemStatement />
        <BenefitsGrid />
        <SavingsCalculator />
        <HowItWorks />
        <ComparisonTable />
        <TrustElements />
        <FAQ />
        <ConsultationForm />
      </main>
      <Footer />
    </>
  )
}