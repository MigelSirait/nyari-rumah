import React, { useState } from 'react';
import './Blog.css';
import { Card, Button, Badge, Container, Row, Col } from 'react-bootstrap';
import Jual1Img from '../../utils/images/jual_rumah.jpg';
import Jual2Img from '../../utils/images/jual_rumah2.jpg';
import Jual3Img from '../../utils/images/jual_rumah3.jpg';
import Jual4Img from '../../utils/images/jual_rumah4.jpg';

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
    {
        id: 4,
        img: Jual4Img,
        title: 'Harga : Rp.1.100.000.000,00',
        date: '1 maret 2025',
        description: 'Alamat : Jalan Lintas Barat No. 23, Perumahan Cemerlang, Kelurahan Kebun Tebeng, Kecamatan Muara Bangkahulu, Kota Bengkulu, Provinsi Bengkulu, Indonesia.',
        category: 'Rumah Minimalis',
    },
];

const categories = [
    { name: 'Semua', count: blogs.length },
    { name: 'Budget Tinggi', count: blogs.filter(b => b.category === 'Budget Tinggi').length },
    { name: 'Budget Rendah', count: blogs.filter(b => b.category === 'Budget Rendah').length },
    { name: 'Rumah Mewah', count: blogs.filter(b => b.category === 'Rumah Mewah').length },
    { name: 'Rumah Minimalis', count: blogs.filter(b => b.category === 'Rumah Minimalis').length },
];

function Blog() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='blog-page'>
            {/* Hero Section */}
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-bold display-4 mb-4'>Jual Rumah</h1>
                    <p className='text-center w-75 mb-5 lead'>
                        Pada platform ini menyediakan berbagai macam rumah yang akan dijual.
                    </p>
                </div>
            </header>

            <Container className='py-4 my-4'>
                <Row>
                    {/* Sidebar */}
                    <Col lg={3} className='mb-4 mb-lg-0'>
                        <Card className='shadow-sm border-0 p-4 mb-4'>
                            <h5 className='fw-bold mb-4'>
                                <i className="bi bi-tags-fill me-2"></i> Kategori
                            </h5>
                            <ul className="list-unstyled">
                                {categories.map((category, index) => (
                                    <li key={index} className="mb-3">
                                        <div className="w-100 d-flex justify-content-between align-items-center text-dark">
                                            <span className="text-start">{category.name}</span>
                                            <Badge bg="primary" pill className="ms-2">{category.count}</Badge>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                    </Col>

                    <Col lg={9}>
                        <div className="d-flex justify-content-between align-items-center mb-5">
                            <h2 className='fw-bold display-6'>Pilih Rumah yang ingin Dibeli</h2>
                            <div className="d-flex gap-2">
                                <div className="input-group" style={{ width: '400px' }}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Cari rumah..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button className="btn btn-primary" type="button">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {filteredBlogs.length > 0 ? (
                            <>
                                <Row className='g-4'>
                                    {filteredBlogs.map((blog) => (
                                        <Col key={blog.id} md={6} lg={4}>
                                            <Card className='h-100 shadow-sm border-0 scale-hover-effect'>
                                                <div className="position-relative">
                                                    <Card.Img
                                                        variant="top"
                                                        src={blog.img}
                                                        className="blog-img"
                                                        style={{ height: '200px', objectFit: 'cover' }}
                                                    />
                                                    {blog.featured && (
                                                        <Badge bg="warning" text="dark" className="position-absolute top-0 end-0 m-2">
                                                            Populer
                                                        </Badge>
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
                                        </Col>
                                    ))}
                                </Row>
                                <nav className="mt-5">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <button className="page-link" tabIndex="-1" disabled>Previous</button>
                                        </li>
                                        <li className="page-item active">
                                            <button className="page-link">1</button>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-link">2</button>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-link">3</button>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-link">Next</button>
                                        </li>
                                    </ul>
                                </nav>

                            </>
                        ) : (
                            <div className="text-center py -5">
                                <h4 className="text-muted">Artikel tidak ditemukan</h4>
                                <p className="mb-4">Tidak ada artikel yang cocok dengan pencarian Anda.</p>
                                <Button
                                    variant="outline-primary"
                                    onClick={() => setSearchQuery('')}
                                >
                                    Tampilkan Semua Artikel
                                </Button>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Blog;
