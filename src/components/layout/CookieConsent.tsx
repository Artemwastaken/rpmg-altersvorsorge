'use client'

import React from 'react'
import CookieConsent from 'react-cookie-consent'

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      declineButtonText="Ablehnen"
      enableDeclineButton
      cookieName="rpmg-cookie-consent"
      style={{
        background: '#2B373B',
        padding: '20px',
        alignItems: 'center',
      }}
      buttonStyle={{
        background: '#8B6F47',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '600',
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
      }}
      declineButtonStyle={{
        background: 'transparent',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '600',
        padding: '12px 24px',
        borderRadius: '8px',
        border: '2px solid #ffffff',
        cursor: 'pointer',
      }}
      expires={365}
      overlay
      overlayStyle={{
        background: 'rgba(0, 0, 0, 0.3)',
      }}
    >
      <div style={{ maxWidth: '900px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
          Cookie-Einstellungen
        </h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
          Wir verwenden Cookies, um Ihnen ein optimales Webseiten-Erlebnis zu bieten.
          Dazu zählen Cookies, die für den Betrieb der Seite notwendig sind, sowie
          solche, die zu Analysezwecken genutzt werden. Sie können selbst entscheiden,
          ob Sie die Cookies zulassen möchten. Weitere Informationen finden Sie in
          unserer{' '}
          <a
            href="/datenschutz"
            style={{
              color: '#D4AF37',
              textDecoration: 'underline',
              fontWeight: '600',
            }}
          >
            Datenschutzerklärung
          </a>
          .
        </p>
      </div>
    </CookieConsent>
  )
}

export default CookieConsentBanner
