import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section py-5'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-3'>Pertanyaan Umum</h2>
            <p className='text-center mb-5'>
                Berikut ini adalah beberapa pertanyaan yang sering diajukan tentang Nyari Rumah. Jika Anda memiliki pertanyaan lainnya, 
                silakan hubungi kami melalui <strong>Kontak</strong>.
            </p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Apa kegunaan dari web Nyari Rumah?</Accordion.Header>
                    <Accordion.Body>
                        Nyari Rumah merupakan web yang membantu masyarakat yang ada di Bengkulu untuk mencari tempat tinggal.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Apakah Nyari Rumah bisa digunakan untuk mempromosikan rumah yang ingin dijual atau di sewakan?</Accordion.Header>
                    <Accordion.Body>
                        Tentu, Nyari Rumah juga membantu masyarakat Bengkulu untuk mempromosikan rumah yang ingin mereka jual atau yang mau disewakan.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Apakah Nyari Rumah hanya mempromosikan rumah yang dijual saja?</Accordion.Header>
                    <Accordion.Body>
                        Tentu tidak, Nyari Rumah tidak hanya mempromosikan rumah yang ingin dijual, tetapi mempromosikan rumah yang ingin disewakan.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;
