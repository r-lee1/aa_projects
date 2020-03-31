def eighties_b_movies
  # List all the movies from 1980-1989 with scores falling between
  # 3 and 5 (inclusive).
  # Show the id, title, year, and score.
  Movie
    .select(:id, :title, :yr, :score)
    .where('yr >= 1980 AND yr < 1990 AND score <= 5 AND score >= 3')
end

def bad_years
  # List the years in which a movie with a rating above 8 was not released.
    good_yrs =  Movie
    .group(:yr)
    .having('Max(score) < 8 ')
    .pluck(:yr)

end

def cast_list(title)
  # List all the actors for a particular movie, given the title.
  # Sort the results by starring order (ord). Show the actor id and name.
Actor
.select(:id, :name)
.joins(:movies)
.where("movies.title = '#{title}'")
.order('castings.ord ASC')
end

def vanity_projects
  # List the title of all movies in which the director also appeared
  # as the starring actor.
  # Show the movie id and title and director's name.

  # Note: Directors appear in the 'actors' table.
 Movie
  .select(:id, :title, :name)
  .joins(:actors)
  .where('director_id = actors.id')
  .where('castings.ord = 1')

end

def most_supportive
  # Find the two actors with the largest number of non-starring roles.
  # Show each actor's id, name and number of supporting roles.
  Actor
  .select(:id, :name, 'COUNT(actors.id) AS roles')
  .group('actors.id')
  .joins(:castings)
  .where('castings.ord != 1 and castings.ord > 1')
  .order('COUNT(actors.id) DESC')
  .limit(2)
end
