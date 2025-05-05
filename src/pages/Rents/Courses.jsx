import React, { useState } from 'react';
import './Courses.css';
import { Card, Button, Form, InputGroup } from 'react-bootstrap';
import SewaRumah3Img from '../../utils/images/sewa_rumah3.jpg';
import SewaRumahImg from '../../utils/images/sewa_rumah.jpg';
import SewaRumah2Img from '../../utils/images/sewa_rumah2.jpg';
import SewaRumah4Img from '../../utils/images/sewa_rumah4.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: SewaRumahImg,
        title: 'Harga Sewa : Rp.5.000.000/month',
        description: 'Alamat : Jalan Raya No. 11, Perumahan Barito, Kelurahan Tugu, Kecamatan Teluk Segara, Kota Bengkulu, Provinsi Bengkulu, Indonesia.',
    },
    {
        id: 3,
        img: SewaRumah2Img,
        title: 'Harga Sewa : Rp.7.000.000/Month',
        description: 'Alamat : Jalan Cempaka No. 5, Perumahan Citra, Kelurahan Lingkar Barat, Kecamatan Abung, Kota Bengkulu, Provinsi Bengkulu, Indonesia.',
    },
    {
        id: 2,
        img: SewaRumah3Img,
        title: 'Harga Sewa : Rp.2.500.000/Month',
        description: 'Alamat : Jalan Mawar No. 17, Perumahan Mandala, Kelurahan Panorama, Kecamatan Muara Bangkahulu, Kota Bengkulu, Provinsi Bengkulu, Indonesia.',
    },
    {
        id: 4,
        img: SewaRumah4Img,
        title: 'Harga Sewa : Rp.6.000.000/Month',
        description: 'Alamat : Jalan Sejahtera No. 27, Perumahan Mutiara, Kelurahan Tebat, Kecamatan Kampung Melayu, Kota Bengkulu, Provinsi Bengkulu, Indonesia.',
    },
]


function Courses() {
    const [searchQuery, setSearchQuery] = useState('');

    // Fungsi untuk memfilter program studi
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className='courses-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-bold display-4 mb-4'>Sewa Rumah</h1>
                    <p className='text-center w-75 mb-5 lead'>
                        Pada platform ini menyediakan berbagai macam rumah yang akan disewakan.
                    </p>
                </div>
            </header>

            {/* Courses Grid */}
            <div className='container pt-5'>
                <div className='text-center'>
                    <h2 className='fw-bold display-5 mb-3'>Pilihan Rumah yang ingin Disewa</h2>
                    {/* Search Bar */}
                    <div className='d-flex justify-content-center mt-4 mb-3'>
                        <InputGroup style={{ width: '500px' }}>
                            <Form.Control
                                type="text"
                                placeholder="Cari rumah yang akan disewa..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="py-2"
                            />
                            <Button variant="primary">
                                <i className="bi bi-search"></i> Cari
                            </Button>
                        </InputGroup>
                    </div>
                </div>

                <div className='row g-4 py-5'>
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div key={course.id} className='col-lg-6'>
                                <Card className='shadow-lg scale-hover-effect border-0 h-100'>
                                    <div className="position-relative">
                                        <Card.Img src={course.img} className='course-img' />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='fw-bold fs-3 mb-3'>{course.title}</Card.Title>
                                        <Card.Text>{course.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="bg-white border-0">
                                        <a href={course.externalUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                            <Button variant="primary" className='w-100 py-2'>
                                                Lihat Detail Rumah
                                            </Button>
                                        </a>
                                    </Card.Footer>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <Button variant="outline-primary" onClick={() => setSearchQuery('')}>
                                Tampilkan Semua
                            </Button>
                        </div>
                    )}
                </div>
                {searchQuery === '' && (
                    <div className="text-center mb-5">
                        <Button variant="primary" size="lg" className="px-4 py-2">
                            <i className="bi bi-collection me-2"></i>
                            Lihat Semua Program
                        </Button>
                    </div>

                )}
            </div>
            <FaqAccordion />
        </div>
    )
}

export default Courses;
