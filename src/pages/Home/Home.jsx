import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card, Button, Badge,} from 'react-bootstrap';
import Jual1Img from '../../utils/images/jual_rumah.jpg';
import Jual2Img from '../../utils/images/jual_rumah2.jpg';
import Jual3Img from '../../utils/images/jual_rumah3.jpg';
import AboutImg from '../../utils/images/about_rumah.jpg';

const blogs = [
    {
        id: 1,
        img: Jual1Img,
        title: 'Harga : Rp. 2.500.000.000,00',
        date: '15 april 2025',
        description: 'Alamat : Jalan Pahlawan No. 32, Perumahan Sejahtera, Kelurahan Rawa Makmur, Kecamatan Kampung Melayu, Kota Bengkulu, Provinsi Bengkulu, Indonesia.',
        category: 'Budget Tinggi',
    },
    {
        id: 2,
        img: Jual2Img,
        title: 'Harga : Rp.900.000.000,00',
        date: '10 april 2025',
        description: 'Alamat : Jalan Pantai No. 8, Perumahan Bahari, Kelurahan Pulau Baai, Kecamatan Ratu Agung, Kota Bengkulu, Provinsi Bengkulu, Indonesia.',
        category: 'Budget Rendah',
    },
    {
        id: 3,
        img: Jual3Img,
        title: 'Harga :  Rp.1.500.000.000,00',
        date: '5 maret 2025',
        description: 'Alamat : Jalan Sukarno Hatta No. 12, Perumahan Indah, Kelurahan Bentiring, Kecamatan Gading Cempaka, Kota Bengkulu, Provinsi Bengkulu, Indonesia.',
        category: 'Rumah Mewah',
    },
];

function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h1 className='text-center fw-bold display-4 mb-4'>Nyari Rumah</h1>
                    <p className="text-center w-75 mb-5 lead">
                        Nyari Rumah adalah sebuah web yang menyediakan informasi dan promosi penjualan rumah atau penyewaan rumah terbaru di Bengkulu. 
                    Pengguna dapat menemukan rumah sesuai lokasi, harga, dan kebutuhan mereka tanpa ribet.
                    </p>
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/About">
                            <button type='button' className='btn btn-primary btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                                <i className="bi bi-info-circle me-2"></i>About Us</button>
                        </Link>
                        <Link to="/contact">
                            <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                                <i className="bi bi-telephone me-2"></i>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="about-section bg-light py-5">
                <div className="container d-flex flex-column flex-lg-row align-items-center">
                    <div className="about-img mb-4 mb-lg-0 w-100 w-lg-50">
                        <img src={AboutImg} alt="Tentang Universitas Bengkulu" className="img-fluid rounded-4 shadow" />
                    </div>

                    <div className="about-text ps-lg-5 w-100 w-lg-50">
                        <h6 className="text-primary text-uppercase fw-bold mb-2">Tentang Nyari Rumah</h6>
                        <h2 className="fw-bold mb-4">Carilah Rumah Idamanmu Yang Aman, Nyaman, Dan Tentram</h2>
                        <p className="text-muted">
                            Website Nyari Rumah ini berfungsi untuk membantu masyarakat yang ada di Bengkulu dalam membeli rumah dan menyewa rumah. Bukan hanya itu saja, website ini juga membantu masyarakat Bengkulu yang ingin mempromosikan rumah mereka untuk dijual atau disewakan.
                        </p>
                        <p className="mb-3 text-muted">
                            Dengan adanya website ini, diharapkan dapat membantu masyarakat Bengkulu yang bingung dalam mempromosikan rumah mereka dan juga membantu masyarakat yang ada di Bengkulu yang memiliki keinginan untuk membeli rumah atau menyewa rumah.
                        </p>
                        <Link to="/about">
                            <Button variant="primary" className="mt-3 px-4 py-2">
                                <i className="bi bi-arrow-right-circle me-2"></i> Selengkapnya
                            </Button>
                        </Link>
                    </div>
                    
                </div>
            </div>

            <FaqAccordion />

            <div className='blog-section bg-dark text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <div className="text-center pt-3 pb-5">
                        <h2 className='fw-bold display-6 mb-3'>
                            <i className="bi bi-newspaper me-2"></i> Berita Penjualan Rumah
                        </h2>
                        <p className="lead w-75 mx-auto">
                            Update terbaru seputar penjualan rumah yang ada di Bengkulu.
                        </p>
                    </div>

                    <div className='row g-4 mb-5'>
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Card className='h-100 shadow-sm scale-hover-effect position-relative'>
                                    <div className="position-relative">
                                        <Card.Img variant="top" src={blog.img} className="blog-img" />
                                        {blog.featured && (
                                            <Badge bg="warning" text="dark" className="position-absolute top-0 end-0 m-2">Populer</Badge>
                                        )}
                                        <Badge bg="primary" className="position-absolute bottom-0 start-0 m-2">
                                            {blog.category}
                                        </Badge>
                                    </div>

                                    <Card.Body>
                                        <div className="d-flex justify-content-between mb-2">
                                            <small className="text-muted">
                                                <i className="bi bi-calendar3 me-1"></i> {blog.date}
                                            </small>
                                        </div>
                                        <Card.Title className='fs-5'>{blog.title}</Card.Title>
                                        <Card.Text className='text-muted'>{blog.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="bg-white border-0">
                                        <a
                                            href={blog.externalUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-read-more"
                                        >
                                            <span>Baca Selengkapnya</span>
                                            <i className="bi bi-box-arrow-up-right ms-2"></i>
                                        </a>
                                    </Card.Footer>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <Link to="/blog">
                        <Button variant="primary" size="lg" className='px-4 py-2'>
                            <i className="bi bi-collection me-2"></i>Lihat Semua Berita
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home;