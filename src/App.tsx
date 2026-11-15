import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { CertificatesPage } from '@/pages/CertificatesPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { GlossaryPage } from '@/pages/GlossaryPage'
import { LessonPage } from '@/pages/LessonPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PlacementTestPage } from '@/pages/PlacementTestPage'
import { RoadmapPage } from '@/pages/RoadmapPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="lesson/:id" element={<LessonPage />} />
        <Route path="test" element={<PlacementTestPage />} />
        <Route path="glossary" element={<GlossaryPage />} />
        <Route path="certificates" element={<CertificatesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
