const supabase = require('../config/supabase');

// Get all projects
const getProjects = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.status(200).json({
      success: true,
      data: data || [],
    });
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects',
      error: error.message,
    });
  }
};

// Get a single project by ID
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error('Error fetching project:', error.message);
    res.status(404).json({
      success: false,
      message: 'Project not found',
      error: error.message,
    });
  }
};

// Create a new project
const createProject = async (req, res) => {
  try {
    const { title, description, tech_stack, github_url, live_url, image_url } = req.body;

    const { data, error } = await supabase
      .from('projects')
      .insert([{ title, description, tech_stack, github_url, live_url, image_url }])
      .select();

    if (error) throw error;

    res.status(201).json({
      success: true,
      data: data[0],
    });
  } catch (error) {
    console.error('Error creating project:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to create project',
      error: error.message,
    });
  }
};

module.exports = { getProjects, getProjectById, createProject };
