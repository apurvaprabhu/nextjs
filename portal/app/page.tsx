import Image from 'next/image'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">   
                      <Image src='/students.jpg' width={400} height={300} />
                    </div>
                  </div>
                </div>       
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="row g-0">
                    <h1>Temper proof document</h1>
                    <div className="text-center">
                      <Link href="/dashboard" replace>
                        <button type="button" className="btn btn-lg btn-outline-primary m-2">DASHBOARD</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
