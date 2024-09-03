CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    habilidades TEXT, -- Lista de habilidades del usuario
    tarifa_hora DECIMAL(10, 2), -- Tarifa por hora del usuario
    es_empresa BOOLEAN DEFAULT FALSE, -- Indica si el usuario es una empresa
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE proyectos (
    id SERIAL PRIMARY KEY,
    empresa_id INT REFERENCES usuarios(id),
    titulo VARCHAR(255),
    descripcion TEXT,
    habilidad_requerida VARCHAR(100),
    horas_estimada INT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contratos (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    proyecto_id INT REFERENCES proyectos(id),
    horas_trabajadas INT,
    total_pago DECIMAL(10, 2),
    anticipo_pago DECIMAL(10, 2),
    fecha_inicio TIMESTAMP,
    fecha_fin TIMESTAMP,
    estado VARCHAR(50) DEFAULT 'pendiente', -- pendiente, en_proceso, completado
    calificacion INT CHECK(calificacion >= 1 AND calificacion <= 5)
);
