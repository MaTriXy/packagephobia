import React from 'react';

import CodeFundAd from '../components/CodeFundAd';
import PageContainer from '../components/PageContainer';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

import { pages } from '../util/constants';

const h1: React.CSSProperties = {
    letterSpacing: '4px',
    fontSize: '1.7rem',
    textTransform: 'uppercase',
    marginBottom: '0',
};

export default () => (
    <>
        <PageContainer>
            <img src={pages.logo_svg} alt="Logo" width="108" height="108" />

            <h1 style={h1}>
                <span style={{ color: '#202420' }}>Package</span>
                <span style={{ color: '#16864d' }}>Phobia</span>
            </h1>

            <p style={{ textAlign: 'center' }}>
                Find the cost of adding a new dev dependency to your project
            </p>

            <SearchBar autoFocus={true} />

            <form
                style={{ marginTop: '60px' }}
                method="post"
                action={pages.compare}
                encType="multipart/form-data"
            >
                <label>
                    <span style={{ marginRight: '20px' }}>Or upload a package.json</span>
                    <input name="package.json" type="file" accept="application/json" />
                </label>
                <noscript>
                    <button type="submit" value="submit">
                        Submit
                    </button>
                </noscript>
            </form>

            <CodeFundAd />
        </PageContainer>
        <Footer />
    </>
);
