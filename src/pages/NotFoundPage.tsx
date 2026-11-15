import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center py-20 text-center">
      <p className="text-5xl font-semibold text-primary">404</p>
      <h1 className="mt-4 text-xl font-semibold">Không tìm thấy trang này</h1>
      <p className="mt-2 text-muted-foreground">Có thể đường dẫn đã thay đổi hoặc bài học không tồn tại.</p>
      <Button asChild className="mt-6">
        <Link to="/roadmap">Về lộ trình</Link>
      </Button>
    </div>
  )
}
