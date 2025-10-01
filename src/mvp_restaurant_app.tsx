import React, { useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'appetizer' | 'main' | 'dessert' | 'beverage';
}

interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}

const MVPRestaurantApp: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'menu' | 'reservations' | 'contact'>('home');
  const [reservation, setReservation] = useState<Reservation>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
  });
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  const menuItems: MenuItem[] = [
    { id: 1, name: 'Bruschetta', description: 'Toasted bread with tomatoes, basil, and olive oil', price: 8.99, category: 'appetizer' },
    { id: 2, name: 'Caesar Salad', description: 'Crisp romaine lettuce with parmesan and croutons', price: 10.99, category: 'appetizer' },
    { id: 3, name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with seasonal vegetables', price: 24.99, category: 'main' },
    { id: 4, name: 'Ribeye Steak', description: '12oz aged ribeye with garlic butter', price: 32.99, category: 'main' },
    { id: 5, name: 'Margherita Pizza', description: 'Fresh mozzarella, tomato sauce, and basil', price: 16.99, category: 'main' },
    { id: 6, name: 'Tiramisu', description: 'Classic Italian dessert with espresso', price: 8.99, category: 'dessert' },
    { id: 7, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with vanilla ice cream', price: 9.99, category: 'dessert' },
    { id: 8, name: 'Red Wine', description: 'House selection of red wine', price: 9.99, category: 'beverage' },
    { id: 9, name: 'Craft Beer', description: 'Local craft beer on tap', price: 6.99, category: 'beverage' },
  ];

  const handleReservationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReservation(prev => ({ ...prev, [name]: value }));
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationSubmitted(true);
    setTimeout(() => {
      setReservationSubmitted(false);
      setReservation({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
      });
    }, 3000);
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0',
    },
    header: {
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      padding: '15px',
      backgroundColor: '#34495e',
    },
    navButton: {
      padding: '10px 20px',
      border: 'none',
      backgroundColor: '#3498db',
      color: 'white',
      cursor: 'pointer',
      borderRadius: '5px',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    content: {
      padding: '20px',
      minHeight: '500px',
    },
    hero: {
      textAlign: 'center',
      padding: '40px 20px',
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
      padding: '20px',
    },
    menuItem: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: '#f9f9f9',
    },
    categoryTitle: {
      color: '#3498db',
      marginTop: '30px',
      marginBottom: '15px',
      fontSize: '24px',
    },
    form: {
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontSize: '16px',
      boxSizing: 'border-box',
    },
    submitButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#27ae60',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      cursor: 'pointer',
      marginTop: '10px',
    },
    successMessage: {
      backgroundColor: '#27ae60',
      color: 'white',
      padding: '15px',
      borderRadius: '5px',
      textAlign: 'center',
      marginBottom: '20px',
    },
    footer: {
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: '40px',
    },
    contactInfo: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
    },
    contactItem: {
      marginBottom: '20px',
      padding: '15px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
    },
  };

  const renderHome = () => (
    <div style={styles.hero}>
      <h1>Welcome to Hopasa Restaurant</h1>
      <p style={{ fontSize: '20px', color: '#666', marginTop: '20px' }}>
        Experience culinary excellence with our carefully crafted menu featuring the finest ingredients
        and authentic flavors.
      </p>
      <div style={{ marginTop: '40px' }}>
        <img 
          src="/api/placeholder/800/400" 
          alt="Restaurant interior" 
          style={{ width: '100%', maxWidth: '800px', borderRadius: '10px' }}
        />
      </div>
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button 
          style={{ ...styles.navButton, padding: '15px 30px', fontSize: '18px' }}
          onClick={() => setActiveSection('menu')}
        >
          View Menu
        </button>
        <button 
          style={{ ...styles.navButton, padding: '15px 30px', fontSize: '18px' }}
          onClick={() => setActiveSection('reservations')}
        >
          Make a Reservation
        </button>
      </div>
    </div>
  );

  const renderMenu = () => {
    const categories: Array<MenuItem['category']> = ['appetizer', 'main', 'dessert', 'beverage'];
    
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Our Menu</h1>
        {categories.map(category => {
          const items = menuItems.filter(item => item.category === category);
          return (
            <div key={category}>
              <h2 style={styles.categoryTitle}>
                {category.charAt(0).toUpperCase() + category.slice(1)}s
              </h2>
              <div style={styles.menuGrid}>
                {items.map(item => (
                  <div key={item.id} style={styles.menuItem}>
                    <h3>{item.name}</h3>
                    <p style={{ color: '#666', margin: '10px 0' }}>{item.description}</p>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#27ae60' }}>
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderReservations = () => (
    <div>
      <h1 style={{ textAlign: 'center' }}>Make a Reservation</h1>
      {reservationSubmitted && (
        <div style={styles.successMessage}>
          Thank you! Your reservation has been submitted successfully. We'll contact you shortly to confirm.
        </div>
      )}
      <form onSubmit={handleReservationSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={reservation.name}
            onChange={handleReservationChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={reservation.email}
            onChange={handleReservationChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={reservation.phone}
            onChange={handleReservationChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Date:</label>
          <input
            type="date"
            name="date"
            value={reservation.date}
            onChange={handleReservationChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Time:</label>
          <input
            type="time"
            name="time"
            value={reservation.time}
            onChange={handleReservationChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Number of Guests:</label>
          <select
            name="guests"
            value={reservation.guests}
            onChange={handleReservationChange}
            required
            style={styles.input}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <button type="submit" style={styles.submitButton}>
          Submit Reservation
        </button>
      </form>
    </div>
  );

  const renderContact = () => (
    <div>
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
      <div style={styles.contactInfo}>
        <div style={styles.contactItem}>
          <h3>Address</h3>
          <p>123 Culinary Street<br />Food District, Gastronomy City, 12345</p>
        </div>
        <div style={styles.contactItem}>
          <h3>Phone</h3>
          <p>(555) 123-4567</p>
        </div>
        <div style={styles.contactItem}>
          <h3>Email</h3>
          <p>info@hopasa-restaurant.com</p>
        </div>
        <div style={styles.contactItem}>
          <h3>Hours</h3>
          <p>
            Monday - Thursday: 11:00 AM - 10:00 PM<br />
            Friday - Saturday: 11:00 AM - 11:00 PM<br />
            Sunday: 10:00 AM - 9:00 PM
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Hopasa Restaurant</h1>
        <p>Fine Dining Experience</p>
      </header>
      
      <nav style={styles.nav}>
        <button
          style={{
            ...styles.navButton,
            backgroundColor: activeSection === 'home' ? '#2980b9' : '#3498db',
          }}
          onClick={() => setActiveSection('home')}
        >
          Home
        </button>
        <button
          style={{
            ...styles.navButton,
            backgroundColor: activeSection === 'menu' ? '#2980b9' : '#3498db',
          }}
          onClick={() => setActiveSection('menu')}
        >
          Menu
        </button>
        <button
          style={{
            ...styles.navButton,
            backgroundColor: activeSection === 'reservations' ? '#2980b9' : '#3498db',
          }}
          onClick={() => setActiveSection('reservations')}
        >
          Reservations
        </button>
        <button
          style={{
            ...styles.navButton,
            backgroundColor: activeSection === 'contact' ? '#2980b9' : '#3498db',
          }}
          onClick={() => setActiveSection('contact')}
        >
          Contact
        </button>
      </nav>

      <main style={styles.content}>
        {activeSection === 'home' && renderHome()}
        {activeSection === 'menu' && renderMenu()}
        {activeSection === 'reservations' && renderReservations()}
        {activeSection === 'contact' && renderContact()}
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 Hopasa Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MVPRestaurantApp;
