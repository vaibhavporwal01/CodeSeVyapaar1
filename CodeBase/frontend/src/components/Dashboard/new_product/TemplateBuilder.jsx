import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Drag-and-drop components
const DraggableField = ({ field }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FIELD',
    item: field,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="bg-gray-100 p-4 mb-4 rounded-xl shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {field.name}
    </div>
  );
};

const DroppableArea = ({ onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'FIELD',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`border-2 p-6 min-h-[200px] rounded-2xl shadow-xl ${
        canDrop ? 'bg-teal-100' : isOver ? 'bg-yellow-100' : 'bg-white'
      }`}
    >
      <h3 className="text-xl text-gray-700 mb-4">Drop Fields Here</h3>
    </div>
  );
};

const FieldCustomization = ({ field, onChange }) => {
  const [option, setOption] = useState('');
  const [options, setOptions] = useState(field.options || []);

  const handleNameChange = (e) => {
    onChange({ ...field, name: e.target.value });
  };

  const handleTypeChange = (e) => {
    onChange({ ...field, type: e.target.value });
  };

  const handleAddOption = () => {
    if (option) {
      setOptions([...options, option]);
      setOption('');
    }
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const saveChanges = () => {
    onChange({ ...field, options });
  };

  return (
    <div className="p-4 mb-4 bg-gray-50 rounded-2xl shadow-xl">
      <div>
        <label className="block text-sm font-semibold text-gray-700">Field Name</label>
        <input
          type="text"
          value={field.name}
          onChange={handleNameChange}
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-semibold text-gray-700">Field Type</label>
        <select
          value={field.type}
          onChange={handleTypeChange}
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="dropdown">Dropdown</option>
        </select>
      </div>

      {field.type === 'dropdown' && (
        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-700">Dropdown Options</label>
          <div className="flex gap-3">
            <input
              type="text"
              value={option}
              onChange={(e) => setOption(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg"
              placeholder="Enter option"
            />
            <button
              onClick={handleAddOption}
              className="px-6 py-2 bg-green-500 text-white rounded-full shadow-lg"
            >
              Add Option
            </button>
          </div>
          <ul className="mt-4">
            {options.map((opt, index) => (
              <li key={index} className="flex justify-between items-center mb-3">
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className="p-3 w-full border border-gray-300 rounded-lg"
                />
                <button
                  onClick={() => handleRemoveOption(index)}
                  className="text-red-500 ml-2"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={saveChanges}
        className="mt-4 w-full py-3 bg-blue-600 text-white rounded-full shadow-md"
      >
        Save Changes
      </button>
    </div>
  );
};

// Preview Section
const FormPreview = ({ template }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Form Preview</h3>
      <form className="space-y-4 mt-4">
        {template.map((field, index) => (
          <div key={index} className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">{field.name}</label>
            {field.type === 'text' && (
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
            )}
            {field.type === 'number' && (
              <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" />
            )}
            {field.type === 'dropdown' && (
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option value="">Select an option</option>
                {field.options?.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

const TemplateBuilder = () => {
  const [fields, setFields] = useState([
    { name: 'Product Name', type: 'text' },
    { name: 'Price', type: 'number' },
    { name: 'Category', type: 'dropdown' },
  ]);
  const [template, setTemplate] = useState([]);
  const [editingField, setEditingField] = useState(null);

  const handleDrop = (field) => {
    setTemplate([...template, field]);
  };

  const handleSaveTemplate = () => {
    setTemplate([...template]); // Explicitly triggers an update and saves the template
    console.log('Template Saved:', template);
  };

  const handleFieldChange = (updatedField) => {
    setTemplate(
      template.map((field) =>
        field.name === updatedField.name ? updatedField : field
      )
    );
    setEditingField(null);
  };

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Create Your Custom Template</h2>
      <div className="flex gap-12">
        <div className="w-1/3 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Available Fields</h3>
          {fields.map((field) => (
            <DraggableField key={field.name} field={field} />
          ))}
        </div>
        <div className="w-2/3 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Template</h3>
          <DroppableArea onDrop={handleDrop} />
          <ul className="mt-6">
            {template.map((field, index) => (
              <li
                key={index}
                className="p-4 mb-4 bg-gray-50 rounded-xl shadow-lg cursor-pointer"
                onClick={() => setEditingField(field)}
              >
                {field.name}
              </li>
            ))}
          </ul>
          <button
            onClick={handleSaveTemplate}
            className="mt-6 w-full py-3 bg-blue-600 text-white rounded-full shadow-lg"
          >
            Save Template
          </button>
        </div>
      </div>

      {editingField && (
        <div className="w-full bg-white p-8 rounded-xl shadow-lg mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Field</h3>
          <FieldCustomization field={editingField} onChange={handleFieldChange} />
        </div>
      )}

      {/* This will display the saved template */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Saved Template</h3>
        <FormPreview template={template} />
      </div>
    </div>
  );
};

// Wrap the TemplateBuilder with DndProvider
const App = () => (
  <DndProvider backend={HTML5Backend}>
    <TemplateBuilder />
  </DndProvider>
);

export default App;
