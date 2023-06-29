import axios from 'axios';
import queryString from 'query-string';
import { DiagramInterface, DiagramGetQueryInterface } from 'interfaces/diagram';
import { GetQueryInterface } from '../../interfaces';

export const getDiagrams = async (query?: DiagramGetQueryInterface) => {
  const response = await axios.get(`/api/diagrams${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createDiagram = async (diagram: DiagramInterface) => {
  const response = await axios.post('/api/diagrams', diagram);
  return response.data;
};

export const updateDiagramById = async (id: string, diagram: DiagramInterface) => {
  const response = await axios.put(`/api/diagrams/${id}`, diagram);
  return response.data;
};

export const getDiagramById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/diagrams/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDiagramById = async (id: string) => {
  const response = await axios.delete(`/api/diagrams/${id}`);
  return response.data;
};
