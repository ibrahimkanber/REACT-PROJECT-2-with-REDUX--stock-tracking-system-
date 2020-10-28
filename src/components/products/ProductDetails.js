import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

function ProductDetails({ categories, product, onSave, onChange }) {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Update" : "ADD"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="Error"
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.productId || ""}
        defaultOption="Select.."
        options={categories.map(category=>({
          value:category.id,
          text:category.categoryName
        }))}
        onChange={onChange}
        error="Error"
      />
          <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error="Error"
      />
          <TextInput
        name="quantityPerUnit"
        label="Quantity per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error="Error"
      />
          <TextInput
        name="unitsInStock"
        label="Units in Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error="Error"
      />
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
}

export default ProductDetails;
