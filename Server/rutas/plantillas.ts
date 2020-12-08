import { Router, Response } from 'express';
import { verificarToken } from '../middelwares/autentificacion';
import { Plantilla } from '../modelos/plantilla';

const plantillaRutas = Router();


// Crear plantilla
plantillaRutas.post('/', (req: any, res: Response) => {

    const body = req.body;
    const titulo=req.params.titulo;
    const descripcion=req.params.descripcion;
    const navbar=req.params.navbar;
    const imagen=req.params.imagen;
    const color=req.params.color;
    const plantillaPropia=req.params.plantillaPropia;

    body.body = body;
    body.titulo = titulo;
    body.descripcion = descripcion;
    body.navbar = navbar;
    body.imagen = imagen;
    body.color = color;
    body.plantillaPropia = plantillaPropia;

    Plantilla.create(body).then(PlantillaDB => {
        res.json({
            ok: true,
            Plantilla: PlantillaDB
        });
    }).catch(err => {
        res.json(err)
    });

});

// Actualizar plantilla
plantillaRutas.post('/update/:id', verificarToken, (req: any, res: Response) => {

    const id = req.params.id;

    const plantilla = {
        body : req.body,
        titulo:req.params.titulo,
        descripcion:req.params.descripcion,
        navbar:req.params.navbar,
        imagen:req.params.imagen,
        color:req.params.color,
        plantillaPropia:req.params.plantillaPropia
    }

    Plantilla.findByIdAndUpdate(id, plantilla, { new: true }, (err, PlantillaDB) => {

        if (err) throw err;
        if (!PlantillaDB) {
            return res.json({
                ok: false,
                mensaje: 'Invalid data'
            })
        }
        res.json({
            ok: true,
            Plantilla
        });
    })
});

// Obtener plantillas
plantillaRutas.get('/', async (req: any, res: Response) => {
    const plantilla = await Plantilla.find()
        .sort({ _id: -1 })
        .exec();

    res.json({
        ok: true,
        Plantilla
    });
});


export default plantillaRutas;