import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

export default function StudentList() {
  const tableHeadStyle = {
    th: {
      color: '#FFF',
      fontWeight: 700,
      background: 'linear-gradient(-45deg, #00bcd9 0%, #608590 100%)',
      whiteSpace: 'nowrap',
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <h1 className='text-primary text-center m-3 p-3  '>Student Details</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th style={tableHeadStyle.th}>Sr. No</th>
                <th style={tableHeadStyle.th}>
                  <i className="fa fa-user" aria-hidden="true"></i> Student Name
                </th>
                <th style={tableHeadStyle.th}>
                  <i className="fa fa-map-marker" aria-hidden="true"></i> Email
                </th>
                <th style={tableHeadStyle.th}>
                  <i className="fa fa-phone" aria-hidden="true"></i> Mobile Number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Tom</td>
                <td>test@yahoo.com</td>
                <td>54535288</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Virat Bisht</td>
                <td>test@yahoo.com</td>
                <td>4554449688</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Jack</td>
                <td>test@yahoo.com</td>
                <td>443439197</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Garry</td>
                <td>test@yahoo.com</td>
                <td>64440987</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
