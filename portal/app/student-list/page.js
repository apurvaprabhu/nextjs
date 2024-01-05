import Image from 'next/image'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

export default function StudentList() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Student Details</h2>
              </div>
            </div>
            <hr />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <table className="table table-bordered table-hover"> {/* Added table-bordered class */}
                    <thead>
                      <tr>
                        <th className="col-xl-4">Student Name</th>
                        <th className="col-xl-4">Email</th>
                        <th className="col-xl-4">Contact Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Test</td>
                        <td>test@yahoo.com</td>
                        <td>76554432234</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
