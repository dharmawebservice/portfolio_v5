import HeroSection from '../components/home/HeroSection'
import AboutSnapshotSection from '../components/home/AboutSnapshotSection'
import FeaturedProjectsSection from '../components/home/FeaturedProjectsSection'
import SkillsPreviewSection from '../components/home/SkillsPreviewSection'
import ExperiencePreviewSection from '../components/home/ExperiencePreviewSection'
import CTABand from '../components/CTABand'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnapshotSection />
      <FeaturedProjectsSection />
      <SkillsPreviewSection />
      <ExperiencePreviewSection />
      <CTABand
        title="Let's build something"
        titleEm="great together"
        subtitle="Open to full-time roles, freelance projects, and interesting collaborations. If you have an idea or opportunity, I'd love to hear about it."
      />
    </>
  )
}
