const PersonModel = require('../models/Person');
const errors = require('../helpers/error');

module.exports = (api) => {
    api.route('/person/:id')
       .get((req, res) => {
            let id = req.params.id;
            PersonModel.findById(id)
                       .then(person => res.json(person))
                       .catch(err => res.status(500).json(errors.ERROR_500));
       });
}
