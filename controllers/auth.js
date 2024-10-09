import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import Empleado, { findOne } from './models/Employee.js'; // Asegúrate de importar tu modelo Empleado

// Registro de empleado
export async function register(req, res) {
  const { nombre, email, password } = req.body;

  const hashedPassword = await hash(password, 10);

  const newEmpleado = new Empleado({
    nombre,
    email,
    password: hashedPassword
  });

  await newEmpleado.save();
  res.json({ message: 'Empleado registrado correctamente' });
}

// Inicio de sesión de empleado
export async function login(req, res) {
  const { email, password } = req.body;
  const empleado = await findOne({ email });

  if (!empleado || !await compare(password, empleado.password)) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const token = sign({ id: empleado._id }, 'tu_secreto_jwt', { expiresIn: '1h' });
  res.json({ token });
}
