module.exports = function(sequalize, dataType){
    
    let alias = "Producto";

    let cols = {
       id :{
            type:dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
       }, 
       id_user:{
            type:dataType.INTEGER
       },
       id_product:{
           type: dataType.INTEGER
       },
       date: {
            type: dataType.DATE
       }

    }

    let config = {
        tableName: "products",
        timestamps: false
    }
    
    let Product = sequalize.define(alias, cols, config);
    // esta parte no esta bien conectada todavia
    /* hasMany, belongsToMany, belongsTo*/
    Product.associate = function(models){
        Product.hasMany(models.Shop,{
            as : "product",
            //through: 
            // otherKey:
            //timestamps:

            foreignKey:""
        })
    }
   
    return Product;
}