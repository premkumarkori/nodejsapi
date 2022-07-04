const QUERY ={
    SELECT_PATIENTS: 'SLECT *FROM patients ORDER BY created_at DESC LIMIT 100',
    SELECT_PATIENT: 'SLECT *FROM patients WHERE id = ?',
    CREATE_PATIENTS: 'INSERT INTO patients (first_name, last_name,email,address,diagnosis,phone, image_url) VALUES (?,?,?,?,?,?,?)',
    UPDATE_PATIENT: 'UPDATE patients SET first_name = ?, last_name = ?, email = ?, address = ?, diagnostic = ?, phone = ?, image_url =? WHERE id = ?',
    DELETE_PATIENT: 'DELETE FROM patients WHERE id= ?'
}

export default QUERY;