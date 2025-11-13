import Button from '../components/Button'

export default function Contact() {
  return (
  <div className="content-wrap px-4 md:px-20 py-12">
    <h1 className="text-3xl md:text-6xl lg:text-7xl font-light leading-snug tracking-tight text-center mb-12">Contact</h1>
      <h2 className="text-3xl font-bold">Find Me Here</h2>
      <p className="mt-4 text-gray-600">Feel free to reach out on social or send an email.</p>
      <div className="mt-6">
        <a href="mailto:itssarahhaw@gmail.com" className="inline-block">
          <Button size="lg">itssarahhaw@gmail.com</Button>
        </a>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Social</h2>
        <ul className="mt-4 space-y-2">
          <li><a href="https://github.com/SanHaw" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/sanhaw/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/_sannyyyyyy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Instagram</a></li>
          <li><a href="https://x.com/_sannyyy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}
