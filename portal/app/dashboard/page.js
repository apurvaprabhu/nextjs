import Image from 'next/image'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

  <div className="container py-5 ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
          <h3>SmartCertify</h3>
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center">   
                <Image src='/students.jpg'  width={400}
                height={300}></Image>
                  <h4 className="mt-1 mb-5 pb-1">A decentralized application to upload and verfy certificates on Ethereum blockchain</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
            <div className="text-center">   
                  <h4 className="mt-1 mb-5 pb-1">Choose your Account</h4>
                </div>
                
<div className="text-center">
       <Link href="/student-login" replace>
           <button type="button" className="btn btn-lg btn-outline-primary m-2">Student
</button>
    </Link>
    <Link href="/admin-login" replace>
    <button type="button" className="btn btn-lg btn-outline-primary m-2">Institution
</button>
    </Link>
    <Link href="/admin-login" replace>
    <button type="button" className="btn btn-lg btn-outline-primary m-2">Company
</button>
</Link>
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
