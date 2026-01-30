import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - お問い合わせ',
  description: 'プロジェクトのご相談やお問い合わせはこちらから。',
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
            <p className="text-lg text-gray-600">
              プロジェクトのご相談や質問など、お気軽にお問い合わせください。
              <br />
              通常、1-2営業日以内にご返信いたします。
            </p>
          </div>

          {/* Contact Form */}
          {/* <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
            <ContactForm />
          </div> */}

          {/* Additional Contact Info */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">その他の連絡方法</h2>
            <div className="space-y-3 text-gray-600">
              {/* <p>
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:mail@example.jp"
                  className="text-blue-600 hover:text-blue-500 transition-colors"
                >
                  mail@example.jp
                </a>
              </p> */}
              <p>
                <span className="font-medium">GitHub:</span>{' '}
                <a
                  href="https://github.com/piroz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 transition-colors"
                >
                  github.com/piroz
                </a>
              </p>
              <p>
                <span className="font-medium">Twitter:</span>{' '}
                <a
                  href="https://twitter.com/hiroshiMraz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 transition-colors"
                >
                  @hiroshiMraz
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
