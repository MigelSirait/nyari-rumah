import React from 'react';
import './About.css';
import AboutUsSectionImg from '../../utils/images/beli_rumah.jpg';
import Person1 from '../../utils/images/migel2.jpg';
import Person2 from '../../utils/images/kia3.jpg';
import Person3 from '../../utils/images/Valgiyos.jpg';
import Person4 from '../../utils/images/Fath.jpg';
import Person5 from '../../utils/images/abid2.jpg';
import LibraryImage from '../../utils/images/platform_rumah.jpg';



const persons = [
    { id: 1, img: Person1, name: "Migel Ray Sirait", position: "Programer" },
    { id: 2, img: Person2, name: "Qonita Adzkiatul Mardiyah", position: "Founder" },
    { id: 3, img: Person3, name: "M. D. Valgiyos Aritonang", position: "Ketua" },
    { id: 4, img: Person4, name: "Fathiyya Nafisah", position: "Developer" },
    { id: 5, img: Person5, name: "Abid Al Husain", position: "Developer" },
];

const stats = [
    { id: 1, icon: "bi-people", number: "10.000+", text: "Pengguna Aktif" },
    { id: 2, icon: "bi-house", number: "1.000+", text: "Rumah Terjual" },
    { id: 4, icon: "bi-house", number: "500+", text: "Rumah Disewa" },
    { id: 3, icon: "bi-journal-bookmark", number: "50+", text: "Karyawan" },
    { id: 4, icon: "bi bi-mortarboard", number: "5", text: "Developer" },
];

const facilities = [
    { id: 1, icon: "bi-search", title: "Pencarian Yang Mudah Dan Cepat", desc: "Membantu Pengguna Menemukan Rumah Sesuai Kebutuhan" },
    { id: 2, icon: "bi-book", title: "Informasi Properti Yang Lengkap", desc: "Menyediakan Foto Deskripsi Alamat dan Harga" },
    { id: 3, icon: "bi-building", title: "Fokus Lokal Bengkulu", desc: "Khusus Melayani Pasar Bengkulu" },
    { id: 4, icon: "bi-lightbulb", title: "Harga Pasar Yang Transparan", desc: "Menampilkan Harga Pasaran Di Area Bengkulu" },
];


function About() {
    return (
        <div className='about-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold display-4 mb-4'>
                        Tentang Nyari Rumah
                    </h1>
                    <p className='text-center w-75 mb-5 lead'>
                        Nyari Rumah adalah sebuah web yang menyediakan informasi dan promosi penjualan rumah atau penyewaan rumah terbaru di Bengkulu. Website ini dapat memudahkan masyarakat untuk mencari, membandingkan, dan memilih hunian impian mereka, mulai dari rumah subsidi hingga properti eksklusif. Pengguna dapat menemukan rumah sesuai lokasi, harga, dan kebutuhan mereka tanpa ribet.
                    </p>
                </div>
            </header>

            <div className="container my-5">
                <div className="row align-items-stretch">
                    {/* Text Section */}
                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                        <h2 className="fw-bold mb-4">Tentang Nyari Rumah</h2>
                        <p className="text-muted text-justify">
                            Nyari Rumah merupakan sebuah website yang dibuat oleh kelompok 2 dalam sebuah Proyek Pemrograman Web. Website ini dibuat pada tanggal 2 Mei 2025 dalam rangka untuk memenuhi Tugas Besar pada Proyek Pemrograman Web. Website Nyari Rumah ini berfungsi untuk membantu masyarakat yang ada di Bengkulu dalam membeli rumah dan menyewa rumah. Bukan hanya itu saja, website ini juga membantu masyarakat Bengkulu yang ingin mempromosikan rumah mereka untuk dijual atau disewakan. Dengan adanya website ini, diharapkan dapat membantu masyarakat Bengkulu yang bingung dalam mempromosikan rumah mereka dan juga membantu masyarakat yang ada di Bengkulu yang memiliki keinginan untuk membeli rumah atau menyewa rumah.
                        </p>
                    </div>
                    {/* Image Section */}
                    <div className="col-lg-5 d-flex justify-content-center align-items-center">
                        <img
                            src={AboutUsSectionImg}
                            className="img-fluid rounded-4 shadow" style={{ width: '90%', height: '90%', objectFit: 'cover' }}
                            alt="Tentang Universitas Bengkulu"
                        />
                    </div>
                </div>
            </div>


            {/* Facilities Section */}
            <div className='container my-5'>
                <div className="row align-items-center">
                    <div className='col-lg-6 order-lg-2 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 display-5 fw-bold text-primary'>
                            <i className="bi bi-building-gear me-3"></i>Platform Unggulan
                        </h2>
                        <p className='lead'>
                            Nyari Rumah menyediakan berbagai platform unggulan untuk mendukung jual beli dan sewa rumah masyarakat Bengkulu.
                        </p>
                        <div className='row mt-4'>
                            {facilities.map((facility) => (
                                <div key={facility.id} className='col-md-6 mb-4'>
                                    <div className='d-flex'>
                                        <div className='me-3'>
                                            <i className={`bi ${facility.icon} fs-3 text-primary`}></i>
                                        </div>
                                        <div>
                                            <h5 className='fw-bold'>{facility.title}</h5>
                                            <p className='mb-0'>{facility.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-1 d-flex justify-content-center'>
                        <img src={LibraryImage} className='img-fluid rounded-4 shadow-lg border border-2 border-primary'
                        alt="Perpustakaan Universitas Bengkulu" />
                    </div>
                </div>
            </div>

            <div className='bg-primary text-white py-5'>
                <div className="container">
                    <h2 className='text-center mb-5 display-5 fw-bold'>
                        <i className="bi bi-graph-up me-3"></i>Nyari Rumah
                    </h2>
                    <div className='row g-4 text-center'>
                        {stats.map((stat) => (
                            <div key={stat.id} className='col-md-4 col-lg-2 mx-auto'>
                                <div className='p-4 bg-white text-primary rounded-4 shadow'>
                                    <i className={`bi ${stat.icon} fs-1 mb-3`}></i>
                                    <h3 className='fw-bold'>{stat.number}</h3>
                                    <p className='mb-0'>{stat.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Gallery Section */}
            <div className='gallery-Section py-5'>
                <div className="container">
                    <h2 className='text-center mb-4 display-5 fw-bold'>
                        <i className="bi bi-images me-3"></i>Developer
                    </h2>
                    <p className='text-center lead mb-5'>
                        <i className="bi bi-person-lines-fill me-2"></i>Kenali lebih dekat para developer Nyari Rumah
                    </p>
                    <div className='row g-4'>
                        {persons.map((person) => (
                            <div key={person.id} className='col-md-6 col-lg-4'>
                                <div className='card h-100 border border-3 border-dark shadow-sm rounded-4'>
                                    <img src={person.img} className='card-img-top rounded-top-4' alt={person.name} />
                                    <div className='card-body text-center'>
                                        <h5 className='card-title fw-bold'>
                                            <i className="bi bi-person-badge me-2"></i>{person.name}
                                        </h5>
                                        <p className='card-text text-muted'>
                                            <i className="bi bi-briefcase me-2"></i>{person.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

