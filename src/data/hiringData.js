export const PIPELINE_STAGES = [
  'New CVs',
  'Shortlisted',
  '1st Round',
  '2nd Round',
  'Client',
  'HR',
  'Offer Out',
  'Joined',
  'Parked'
];

export const PIPELINE_SOURCES = [
  'Agency',
  'Job Portal',
  'Referral',
  'Website Application'
];

export const INITIAL_HIRING_POSITIONS = [
  {
    id: 'pos-1',
    title: 'Accountant - Dubai',
    company: 'Alphasure',
    division: 'Plus',
    location: 'Dubai',
    openCount: 0
  },
  {
    id: 'pos-2',
    title: 'Accountant',
    company: 'Alphasure',
    division: 'Sleek',
    location: 'Belgaum',
    openCount: 2
  },
  {
    id: 'pos-3',
    title: 'Senior Accountant - US Accounting',
    company: 'Insight',
    division: 'Insight',
    location: 'Remote',
    openCount: 1
  },
  {
    id: 'pos-4',
    title: 'Senior Chartered Accountant (CA) - Advisory',
    company: 'Alphasure',
    division: 'Advisory',
    location: 'Mumbai (Hybrid)',
    openCount: 1
  },
  {
    id: 'pos-5',
    title: 'Tax & Compliance Associate (GST & TDS)',
    company: 'Alphasure',
    division: 'Tax & Statutory',
    location: 'Mumbai / Remote',
    openCount: 2
  },
  {
    id: 'pos-6',
    title: 'Corporate Secretarial & ROC Executive',
    company: 'Alphasure',
    division: 'Corporate Secretarial',
    location: 'Mumbai (On-site)',
    openCount: 1
  }
];

// Generate the initial 79 sample candidates matching the Hiring Dashboard screenshot
// 1 in New CVs (Job Portal), 1 in Joined (Job Portal), 77 in Parked (Referral)
const FIRST_NAMES = [
  'Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Ayaan', 'Krishna', 'Ishaan',
  'Shaurya', 'Atharv', 'Advik', 'Pranav', 'Advaith', 'Aaryav', 'Kabir', 'Dhruv', 'Ananya', 'Diya',
  'Saanvi', 'Aadhya', 'Pari', 'Anika', 'Navya', 'Angel', 'Riya', 'Myra', 'Ira', 'Avani', 'Sara',
  'Rohan', 'Sneha', 'Vikram', 'Pooja', 'Rahul', 'Neha', 'Karan', 'Priya', 'Amit', 'Sunita',
  'Deepak', 'Meera', 'Sanjay', 'Kavita', 'Manish', 'Anita', 'Rajesh', 'Preeti', 'Suresh', 'Geeta',
  'Anil', 'Rekha', 'Manoj', 'Shweta', 'Ashok', 'Seema', 'Dinesh', 'Usha', 'Ramesh', 'Asha',
  'Kishore', 'Bhavna', 'Girish', 'Hema', 'Mahesh', 'Divya', 'Naresh', 'Tanvi', 'Hemant', 'Pallavi',
  'Harish', 'Namrata', 'Nitin', 'Rupali', 'Satish', 'Sheetal', 'Umesh', 'Vandana', 'Yogesh', 'Archana'
];

const LAST_NAMES = [
  'Sharma', 'Verma', 'Patel', 'Mehta', 'Joshi', 'Shah', 'Nair', 'Rao', 'Kulkarni', 'Deshmukh',
  'Reddy', 'Gupta', 'Singh', 'Agarwal', 'Chopra', 'Malhotra', 'Bhatia', 'Saxena', 'Kapoor', 'Khanna',
  'Menon', 'Pillai', 'Iyer', 'Iyengar', 'Mukherjee', 'Banerjee', 'Chatterjee', 'Dutta', 'Ghosh', 'Bose',
  'Thakur', 'Chauhan', 'Rathore', 'Yadav', 'Pandey', 'Mishra', 'Trivedi', 'Dubey', 'Shukla', 'Tripathi'
];

const CITIES = ['Mumbai', 'Pune', 'Belgaum', 'Bengaluru', 'Delhi NCR', 'Dubai', 'Hyderabad', 'Ahmedabad'];
const QUALIFICATIONS = ['B.Com', 'M.Com', 'Chartered Accountant (CA)', 'Semi-Qualified CA', 'MBA (Finance)', 'CS Inter', 'CMA'];
const EMPLOYERS = ['Deloitte', 'KPMG', 'EY', 'PwC', 'Grant Thornton', 'BDO India', 'Local CA Firm', 'Tally Solutions', 'Infosys BPM', 'Wipro Finance'];

export const generateInitialCandidates = () => {
  const candidates = [];
  const baseTime = Date.now() - 30 * 24 * 3600 * 1000; // past 30 days

  // 1. Candidate in 'New CVs' (Job Portal, Accountant - Belgaum)
  candidates.push({
    id: 'app-seed-new-1',
    first_name: 'Priya',
    last_name: 'Sharma',
    phone: '+91 98201 12345',
    email: 'priya.sharma@example.com',
    city: 'Belgaum',
    qualification: 'M.Com, Semi-Qualified CA',
    experience_years: '2.5',
    date_of_birth: '14/05/1998',
    current_ctc: '4.8',
    current_employer: 'S. K. Jain & Co.',
    notice_period: '30 Days (1 Month)',
    resume_url: 'https://linkedin.com/in/sample-priya-sharma',
    cover_note: 'Eager to join Alphasure Belgaum team for end-to-end client accounting.',
    stage: 'New CVs',
    source: 'Job Portal',
    job_id: 'pos-2',
    job_title: 'Accountant',
    created_at: new Date(Date.now() - 2 * 3600 * 1000).toISOString()
  });

  // 2. Candidate in 'Joined' (Job Portal, Accountant - Dubai)
  candidates.push({
    id: 'app-seed-joined-1',
    first_name: 'Fatima',
    last_name: 'Al Mansoori',
    phone: '+971 50 123 4567',
    email: 'fatima.almansoori@example.com',
    city: 'Dubai',
    qualification: 'ACCA / B.Com',
    experience_years: '4.0',
    date_of_birth: '22/09/1995',
    current_ctc: '14.5',
    current_employer: 'Gulf Finance Ltd',
    notice_period: 'Immediate / Serving Notice',
    resume_url: 'https://linkedin.com/in/sample-fatima',
    cover_note: 'Onboarded for Alphasure Plus Dubai entity operations.',
    stage: 'Joined',
    source: 'Job Portal',
    job_id: 'pos-1',
    job_title: 'Accountant - Dubai',
    created_at: new Date(Date.now() - 15 * 24 * 3600 * 1000).toISOString()
  });

  // 3. 77 Candidates in 'Parked' (Referral)
  for (let i = 1; i <= 77; i++) {
    const fName = FIRST_NAMES[i % FIRST_NAMES.length];
    const lName = LAST_NAMES[(i * 3) % LAST_NAMES.length];
    const city = CITIES[i % CITIES.length];
    const qual = QUALIFICATIONS[i % QUALIFICATIONS.length];
    const exp = (1 + (i % 8) * 0.5).toFixed(1);
    const ctc = (3.5 + (i % 12) * 0.8).toFixed(1);
    const employer = EMPLOYERS[i % EMPLOYERS.length];
    const position = INITIAL_HIRING_POSITIONS[i % INITIAL_HIRING_POSITIONS.length];
    const dateOffset = baseTime + (i * 3.7 * 3600 * 1000 * 2.5);

    candidates.push({
      id: `app-seed-parked-${i}`,
      first_name: fName,
      last_name: lName,
      phone: `+91 98${(10000000 + i * 9723).toString().slice(0, 8)}`,
      email: `${fName.toLowerCase()}.${lName.toLowerCase()}${i}@example.com`,
      city: city,
      qualification: qual,
      experience_years: String(exp),
      date_of_birth: `${String((i % 28) + 1).padStart(2, '0')}/${String((i % 12) + 1).padStart(2, '0')}/${1990 + (i % 9)}`,
      current_ctc: String(ctc),
      current_employer: employer,
      notice_period: i % 2 === 0 ? '30 Days (1 Month)' : '60 Days (2 Months)',
      resume_url: `https://linkedin.com/in/${fName.toLowerCase()}-${lName.toLowerCase()}`,
      cover_note: 'Candidate parked in talent pool for future consideration.',
      stage: 'Parked',
      source: 'Referral',
      job_id: position.id,
      job_title: position.title,
      created_at: new Date(dateOffset).toISOString()
    });
  }

  return candidates;
};
