{
    type FrontendDevelopers = 'FakibazDeveloper' | 'JuniorDeveloper'
    const developer:FrontendDevelopers = 'FakibazDeveloper'

    // union on object
    type User={
        name: string;
        email?: string;
        gender: 'Male' | 'Female';
        bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    }

    const user:User = {
        name: 'Fahim',
        gender: 'Male',
        bloodGroup: 'A+'
    }
    console.log(user)


    // Intersection
    type FrontendDeveloper = {
        skills: string[];
        designation1:'Frontend Developer'
    }

    type BackendDeveloper = {
        skills: string[];
        designation2:'Backend Developer'
    }
    
    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper
    const developer1:FullStackDeveloper = {
        skills: ['HTML', 'CSS', 'JavaScript'],
        designation1:'Frontend Developer',
        designation2:'Backend Developer'
    }
    console.log(developer1)

}